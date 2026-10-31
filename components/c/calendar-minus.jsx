import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kq24j1p1x.css';
import '../../css/o/orwntkbca.css';
import '../../css/g/g2dezyb4x.css';
import '../../css/g/ghfhivbgc.css';
import '../../css/s/sbl9kyank.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kq24j1p1x wm-shadow"/><path class="orwntkbca wm-shadow"/><path class="g2dezyb4x"/><path class="ghfhivbgc"/><path class="sbl9kyank"/></g>`,
		"fallback": "withicons-brutal:calendar-minus",
	});
}

export default Component;
