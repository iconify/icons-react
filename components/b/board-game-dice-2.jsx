import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rysj573jr.css';
import '../../css/u/uo3hpob_z.css';
import '../../css/i/i7a87lrkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rysj573jr"/><path class="uo3hpob_z"/><path class="i7a87lrkp"/></g>`,
		"fallback": "streamline-ultimate:board-game-dice-2",
	});
}

export default Component;
