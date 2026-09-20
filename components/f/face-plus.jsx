import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7e-66j0p.css';
import '../../css/l/lr-f1mf1k.css';
import '../../css/c/c12t-giiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v7e-66j0p"/><path class="lr-f1mf1k"/><path class="c12t-giiy"/></g>`,
		"fallback": "reicon:face-plus",
	});
}

export default Component;
