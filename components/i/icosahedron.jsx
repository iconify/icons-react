import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rv57m5btj.css';
import '../../css/m/m9qep6biy.css';
import '../../css/l/l70hpib7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rv57m5btj"/><path class="m9qep6biy"/><path class="l70hpib7m"/></g>`,
		"fallback": "tabler:icosahedron",
	});
}

export default Component;
