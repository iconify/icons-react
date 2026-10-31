import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ojzmn_f6d.css';
import '../../css/b/be3ht6qya.css';
import '../../css/r/rl600mg9c.css';
import '../../css/o/o8j8-41gv.css';
import '../../css/o/oub7j1b8b.css';
import '../../css/t/tv90aybjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ojzmn_f6d wm-shadow"/><path class="be3ht6qya"/><path class="rl600mg9c"/><path class="o8j8-41gv"/><path class="oub7j1b8b"/><path class="tv90aybjk"/></g>`,
		"fallback": "withicons-retro:car-front",
	});
}

export default Component;
