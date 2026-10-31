import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/z-1s05bmt.css';
import '../../css/d/df6vcdb6q.css';
import '../../css/h/hdw8f2b8o.css';
import '../../css/k/kes5jubnh.css';
import '../../css/y/ypxroy3ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGk1tGubXX" x1="10.5" x2="14.5" y1="1.57" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k z-1s05bmt"/><path class="df6vcdb6q wm-deco"/><path fill="url(#SVGk1tGubXX)" class="hdw8f2b8o wm-k"/><path class="kes5jubnh wm-shadow"/><path class="wm-shine ypxroy3ym"/></g>`,
		"fallback": "withicons-valentine:flag",
	});
}

export default Component;
