import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q623lqbyr.css';
import '../../css/e/el93_bbvr.css';
import '../../css/m/mqpw86v3n.css';
import '../../css/x/x-cc4bbxh.css';
import '../../css/z/zns7tqbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q623lqbyr wm-shadow"/><path class="el93_bbvr wm-shadow"/><path class="mqpw86v3n"/><path class="x-cc4bbxh"/><path class="zns7tqbis"/></g>`,
		"fallback": "withicons-brutal:hexagon",
	});
}

export default Component;
