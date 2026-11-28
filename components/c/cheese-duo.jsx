import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2d3of8ot.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nl_qurb3s.css';
import '../../css/k/kf2fi9bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2d3of8ot secondary"/><g class="dt0cm9dhy primary"><path class="nl_qurb3s"/><path class="kf2fi9bdy"/></g>`,
		"fallback": "iconaut:cheese-duo",
	});
}

export default Component;
