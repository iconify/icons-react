import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z31n7sf4d.css';

const viewBox = {"width":1472,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1472 0) scale(-1 1)"><path class="z31n7sf4d"/></g>`,
		"fallback": "fa:arrow-right",
	});
}

export default Component;
