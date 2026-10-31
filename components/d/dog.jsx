import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwotb3bww.css';
import '../../css/j/jtjothb9z.css';
import '../../css/w/weke7ffcu.css';
import '../../css/u/u_prlyb3e.css';
import '../../css/g/goclogboq.css';
import '../../css/y/yeosyfb3x.css';
import '../../css/u/udd_-ehkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k wwotb3bww"/><path class="jtjothb9z wm-deco"/><path class="weke7ffcu wm-k"/><path class="u_prlyb3e wm-k"/><path class="goclogboq wm-shadow"/><path class="wm-shine yeosyfb3x"/><path class="udd_-ehkf wm-shine"/></g>`,
		"fallback": "withicons-valentine:dog",
	});
}

export default Component;
