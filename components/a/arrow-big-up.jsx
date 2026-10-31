import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/z3lu3bb1r.css';
import '../../css/r/r1rb3xpgq.css';
import '../../css/d/d7vog8aia.css';
import '../../css/m/m-2bkobjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGLuuyzewy" x1="10" x2="14" y1="1.51" y2="21.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k z3lu3bb1r"/><path class="r1rb3xpgq wm-deco"/><path fill="url(#SVGLuuyzewy)" class="d7vog8aia wm-k"/><path class="m-2bkobjc wm-shadow"/></g>`,
		"fallback": "withicons-valentine:arrow-big-up",
	});
}

export default Component;
