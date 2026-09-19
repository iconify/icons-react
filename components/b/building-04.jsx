import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/ye3atz2yo.css';
import '../../css/z/zuvfm_b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ye3atz2yo"/><path class="zuvfm_b-g"/></g>`,
		"fallback": "hugeicons:building-04",
	});
}

export default Component;
