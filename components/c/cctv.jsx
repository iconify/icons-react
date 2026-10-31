import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/i_xnwccjz.css';
import '../../css/e/e1llk8bng.css';
import '../../css/p/p-j1rl6zl.css';
import '../../css/t/tdain7vfb.css';
import '../../css/y/yqqhfpbzx.css';
import '../../css/a/a1ic9ebek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPuzrNdZo" x1="9.81" x2="13.81" y1="3.01" y2="22.57" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="i_xnwccjz wm-k"/><path class="e1llk8bng wm-a"/><path class="p-j1rl6zl wm-deco"/><path fill="url(#SVGPuzrNdZo)" class="tdain7vfb wm-k"/><path class="wm-a yqqhfpbzx"/><path class="a1ic9ebek wm-shadow"/></g>`,
		"fallback": "withicons-valentine:cctv",
	});
}

export default Component;
