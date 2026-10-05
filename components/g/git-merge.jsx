import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/y284-ebqk.css';
import '../../css/s/sbq6hlbka.css';
import '../../css/k/keq_k_b_z.css';
import '../../css/m/m49qz1b7l.css';
import '../../css/n/nhzj3ja0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="y284-ebqk"/><path class="sbq6hlbka"/><path class="keq_k_b_z"/><path class="m49qz1b7l"/><path class="nhzj3ja0p"/></g>`,
		"fallback": "matita:git-merge",
	});
}

export default Component;
