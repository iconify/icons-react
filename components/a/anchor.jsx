import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/l225je2kg.css';
import '../../css/x/x2eb027kx.css';
import '../../css/z/z924obbou.css';
import '../../css/g/gk839tbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFXzhPeEy" x1="10" x2="14" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="l225je2kg wm-k"/><path class="wm-deco x2eb027kx"/><path fill="url(#SVGFXzhPeEy)" class="wm-k z924obbou"/><path class="gk839tbzx wm-shadow"/></g>`,
		"fallback": "withicons-valentine:anchor",
	});
}

export default Component;
