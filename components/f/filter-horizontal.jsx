import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yqwfmp5zs.css';
import '../../css/z/zhj4bwtvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yqwfmp5zs"/><path class="zhj4bwtvu"/></g>`,
		"fallback": "hugeicons:filter-horizontal",
	});
}

export default Component;
