import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kq24j1p1x.css';
import '../../css/o/orwntkbca.css';
import '../../css/y/yyy6kh67z.css';
import '../../css/g/ghfhivbgc.css';
import '../../css/o/oh4ms0yal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kq24j1p1x wm-shadow"/><path class="orwntkbca wm-shadow"/><path class="yyy6kh67z"/><path class="ghfhivbgc"/><path class="oh4ms0yal"/></g>`,
		"fallback": "withicons-brutal:calendar",
	});
}

export default Component;
