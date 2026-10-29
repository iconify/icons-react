import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/njyp7yb0n.css';
import '../../css/w/wyzy68f_y.css';
import '../../css/m/mz_--eb0w.css';
import '../../css/h/h2-bjzlmt.css';
import '../../css/l/l8anq9i8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="njyp7yb0n"/><path class="wm-k wyzy68f_y"/><path class="mz_--eb0w wm-a"/><path class="h2-bjzlmt wm-k"/><path class="l8anq9i8q wm-a"/></g>`,
		"fallback": "withicons:chopsticks-sketch",
	});
}

export default Component;
