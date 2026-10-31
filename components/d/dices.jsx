import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/brmzzdr0t.css';
import '../../css/j/jz5xjjbmk.css';
import '../../css/m/mbuc5196p.css';
import '../../css/q/qd26gpbiv.css';
import '../../css/r/rtqu77szh.css';
import '../../css/d/d9hlylb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="brmzzdr0t wm-shadow"/><path class="jz5xjjbmk"/><path class="mbuc5196p"/><path class="qd26gpbiv"/><path class="rtqu77szh"/><path class="d9hlylb0n"/></g>`,
		"fallback": "withicons-retro:dices",
	});
}

export default Component;
