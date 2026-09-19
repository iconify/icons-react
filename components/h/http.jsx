import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7upebym.css';
import '../../css/r/rirt7bcol.css';
import '../../css/j/jdk23lb_l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xp7upebym"><path class="rirt7bcol"/><path class="jdk23lb_l"/></g>`,
		"fallback": "catppuccin:http",
	});
}

export default Component;
