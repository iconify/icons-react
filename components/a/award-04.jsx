import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/ynwhcgadb.css';
import '../../css/u/u4ebf6boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ynwhcgadb"/><path class="u4ebf6boi"/></g>`,
		"fallback": "hugeicons:award-04",
	});
}

export default Component;
