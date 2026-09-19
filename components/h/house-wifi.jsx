import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ap-lx34qh.css';
import '../../css/v/vyqfhp5nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ap-lx34qh"/><path class="vyqfhp5nx"/></g>`,
		"fallback": "hugeicons:house-wifi",
	});
}

export default Component;
