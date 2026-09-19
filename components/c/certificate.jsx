import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lfwfykbre.css';
import '../../css/u/uh41w4bwu.css';
import '../../css/l/lq4_xjbhf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="lfwfykbre"/><path class="uh41w4bwu"/><path class="lq4_xjbhf"/></g>`,
		"fallback": "catppuccin:certificate",
	});
}

export default Component;
