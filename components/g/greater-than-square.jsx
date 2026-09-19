import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/pd4lkrbca.css';
import '../../css/h/hjoc0hbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="pd4lkrbca"/><path class="hjoc0hbzl"/></g>`,
		"fallback": "hugeicons:greater-than-square",
	});
}

export default Component;
