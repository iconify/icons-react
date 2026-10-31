import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kq24j1p1x.css';
import '../../css/o/orwntkbca.css';
import '../../css/u/u2z73bcjg.css';
import '../../css/g/ghfhivbgc.css';
import '../../css/k/kogticijw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kq24j1p1x wm-shadow"/><path class="orwntkbca wm-shadow"/><path class="u2z73bcjg"/><path class="ghfhivbgc"/><path class="kogticijw"/></g>`,
		"fallback": "withicons-brutal:calendar-span",
	});
}

export default Component;
