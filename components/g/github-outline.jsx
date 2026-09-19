import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/g/g0s0jyb1k.css';
import '../../css/q/q_cnerb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p9-zrkb4g"/><path class="g0s0jyb1k"/><path class="q_cnerb1n"/></g>`,
		"fallback": "iconoir:github-outline",
	});
}

export default Component;
