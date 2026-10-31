import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/r1kj8rbit.css';
import '../../css/t/tt55_fc-h.css';
import '../../css/h/hkpkmp9gh.css';
import '../../css/e/ekgfa1rbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGzjneBbYG" x1="10" x2="14" y1="3.02" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="r1kj8rbit wm-k"/><path class="tt55_fc-h wm-deco"/><path fill="url(#SVGzjneBbYG)" class="hkpkmp9gh wm-k"/><path class="ekgfa1rbh wm-shadow"/></g>`,
		"fallback": "withicons-valentine:corner-up-left",
	});
}

export default Component;
