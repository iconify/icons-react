import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_6tbxbxp.css';
import '../../css/h/hga_k_b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v_6tbxbxp"/><path class="hga_k_b2j"/></g>`,
		"fallback": "reicon:clipboard3-filled",
	});
}

export default Component;
