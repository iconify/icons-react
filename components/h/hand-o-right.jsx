import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn38qzb0f.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1792 0) scale(-1 1)"><path class="mn38qzb0f"/></g>`,
		"fallback": "fa:hand-o-right",
	});
}

export default Component;
