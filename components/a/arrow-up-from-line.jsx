import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/ackqa5buo.css';
import '../../css/g/g52rqtbzz.css';
import '../../css/t/t8afhhbfq.css';
import '../../css/e/ebf51hchv.css';
import '../../css/d/dezco93me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJ0JXObIk" x1="4" x2="12.8" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient><linearGradient id="SVGqjVhobfb" x1="0" x2="0" y1=".96" y2="9.18" gradientUnits="userSpaceOnUse"><stop offset=".25" class="vc--wpv5i"/><stop offset="1" class="ackqa5buo"/></linearGradient></defs><path class="g52rqtbzz"/><path fill="url(#SVGJ0JXObIk)" class="t8afhhbfq wm-shine"/><path class="ebf51hchv wm-deco"/><path fill="url(#SVGqjVhobfb)" class="dezco93me wm-deco"/></g>`,
		"fallback": "withicons-christmas:arrow-up-from-line",
	});
}

export default Component;
