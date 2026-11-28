import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwdajubci.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d_plodt-s.css';
import '../../css/o/oi3kjkbsp.css';
import '../../css/f/ffxep2b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwdajubci secondary"/><g class="dt0cm9dhy primary"><path class="d_plodt-s"/><path class="oi3kjkbsp"/><path class="ffxep2b5e"/></g>`,
		"fallback": "iconaut:ai-search-duo",
	});
}

export default Component;
