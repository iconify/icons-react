import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9n72kbnl.css';

const viewBox = {"width":1088,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1088 0) scale(-1 1)"><path class="n9n72kbnl"/></g>`,
		"fallback": "fa:chevron-right",
	});
}

export default Component;
