import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kq24j1p1x.css';
import '../../css/o/orwntkbca.css';
import '../../css/f/f9_3i8b8l.css';
import '../../css/g/ghfhivbgc.css';
import '../../css/w/w2ogq-m2h.css';
import '../../css/d/d_jz5xbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kq24j1p1x wm-shadow"/><path class="orwntkbca wm-shadow"/><path class="f9_3i8b8l"/><path class="ghfhivbgc"/><path class="w2ogq-m2h"/><path class="d_jz5xbrr"/></g>`,
		"fallback": "withicons-brutal:calendar-heart",
	});
}

export default Component;
