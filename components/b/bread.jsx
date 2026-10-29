import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lyael0bpz.css';
import '../../css/p/p0g8pcbwt.css';
import '../../css/n/n6nxl6bfk.css';
import '../../css/f/fcof4ykcg.css';
import '../../css/f/fmta_6bfn.css';
import '../../css/l/l6tsg1bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="lyael0bpz wm-shadow"/><path class="p0g8pcbwt"/><path class="n6nxl6bfk"/><path class="fcof4ykcg"/><path class="fmta_6bfn wm-shine"/><path class="l6tsg1bxk wm-deco"/></g>`,
		"fallback": "withicons-sticker:bread",
	});
}

export default Component;
