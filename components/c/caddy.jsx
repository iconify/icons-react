import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tq_j3q6-k.css';
import '../../css/y/yuqn2cq3m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tq_j3q6-k"/><path class="yuqn2cq3m"/></g>`,
		"fallback": "catppuccin:caddy",
	});
}

export default Component;
