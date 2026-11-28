import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eldr0wm6j.css';
import '../../css/v/vm1xymzfr.css';
import '../../css/q/ql6x9rb7p.css';
import '../../css/x/xamkilm_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="eldr0wm6j"/><path class="vm1xymzfr"/><path class="ql6x9rb7p"/><path class="xamkilm_z"/></g>`,
		"fallback": "iconaut:gem",
	});
}

export default Component;
