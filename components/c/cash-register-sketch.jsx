import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j9nsgn3dd.css';
import '../../css/z/zpb40dbcj.css';
import '../../css/m/mp6icqbcw.css';
import '../../css/m/mhf7fy-me.css';
import '../../css/m/m2_ryiblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j9nsgn3dd"/><path class="wm-k zpb40dbcj"/><path class="mp6icqbcw wm-a"/><path class="mhf7fy-me wm-k"/><path class="m2_ryiblu wm-a"/></g>`,
		"fallback": "withicons:cash-register-sketch",
	});
}

export default Component;
