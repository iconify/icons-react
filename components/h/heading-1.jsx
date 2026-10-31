import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/axq7gs_7c.css';
import '../../css/u/uug05_byr.css';
import '../../css/i/ix7olfb8x.css';
import '../../css/q/qkqny8yvr.css';
import '../../css/r/rzxmwcevp.css';
import '../../css/d/dv38tpuio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMvZjFdPp" x1="9" x2="13" y1="3.02" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="axq7gs_7c wm-k"/><path class="uug05_byr wm-s"/><path class="ix7olfb8x wm-deco"/><path fill="url(#SVGMvZjFdPp)" class="qkqny8yvr wm-k"/><path class="rzxmwcevp wm-s"/><path class="dv38tpuio wm-shadow"/></g>`,
		"fallback": "withicons-valentine:heading-1",
	});
}

export default Component;
