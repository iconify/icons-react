import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ou8cchb0s.css';
import '../../css/d/dmryjzbis.css';
import '../../css/r/ru6l5yb_d.css';
import '../../css/u/u86mb3bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ou8cchb0s"/><path class="dmryjzbis"/><path class="ru6l5yb_d"/><path class="u86mb3bdm"/></g>`,
		"fallback": "iconaut:input-text-cursor",
	});
}

export default Component;
