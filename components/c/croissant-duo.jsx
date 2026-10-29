import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r8tvyrqaf.css';
import '../../css/e/e_jnf7h6d.css';
import '../../css/o/ot7ug_ubs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r8tvyrqaf"/><path class="e_jnf7h6d wm-a"/><path class="ot7ug_ubs"/></g>`,
		"fallback": "withicons:croissant-duo",
	});
}

export default Component;
