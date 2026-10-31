import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qndouacok.css';
import '../../css/r/rw-aaobza.css';
import '../../css/v/v1a8hqbko.css';
import '../../css/w/wh4xbvbwb.css';
import '../../css/u/u1273gl5p.css';
import '../../css/f/f7d-weawe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qndouacok wm-shadow"/><path class="rw-aaobza"/><path class="v1a8hqbko"/><path class="wh4xbvbwb"/><path class="u1273gl5p"/><path class="f7d-weawe"/></g>`,
		"fallback": "withicons-retro:fireplace",
	});
}

export default Component;
