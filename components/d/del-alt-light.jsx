import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/ypxgppbhb.css';
import '../../css/z/zq1l8-bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="ypxgppbhb"/><path class="zq1l8-bjm"/></g>`,
		"fallback": "lets-icons:del-alt-light",
	});
}

export default Component;
