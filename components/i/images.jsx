import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhm703nga.css';
import '../../css/e/e3a6xsbtr.css';
import '../../css/f/fx8mkab4g.css';
import '../../css/h/hnoua222e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dhm703nga"/><path class="e3a6xsbtr"/><rect transform="matrix(-1 0 0 -1 28 20)" class="fx8mkab4g"/><path class="hnoua222e"/></g>`,
		"fallback": "reicon:images",
	});
}

export default Component;
