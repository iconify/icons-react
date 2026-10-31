import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/piepat6eo.css';
import '../../css/i/itaqi9blm.css';
import '../../css/r/r6bb04byk.css';
import '../../css/i/infn3xb-t.css';
import '../../css/p/p7l7mibbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfIUeDdGj" x1="9.75" x2="13.75" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="piepat6eo wm-k"/><path class="itaqi9blm wm-deco"/><path class="r6bb04byk wm-k"/><path fill="url(#SVGfIUeDdGj)" class="infn3xb-t wm-k"/><path class="p7l7mibbg wm-shadow"/></g>`,
		"fallback": "withicons-valentine:factory",
	});
}

export default Component;
