import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/y/y42zheh8n.css';
import '../../css/e/eb8ddubzx.css';
import '../../css/z/zro9gfbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGXclW2d1P" x1="10" x2="14" y1="1.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k y42zheh8n"/><path class="eb8ddubzx wm-deco"/><path fill="url(#SVGXclW2d1P)" class="wm-k zro9gfbzv"/></g>`,
		"fallback": "withicons-valentine:fingerprint",
	});
}

export default Component;
