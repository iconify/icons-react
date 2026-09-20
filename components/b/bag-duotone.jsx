import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytmg0lbwm.css';
import '../../css/v/v7l8omrpk.css';
import '../../css/u/u5qgc4bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ytmg0lbwm"/><path class="v7l8omrpk"/><path class="u5qgc4bnb"/></g>`,
		"fallback": "lets-icons:bag-duotone",
	});
}

export default Component;
