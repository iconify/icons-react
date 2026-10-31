import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/g/ghf6c4b7u.css';
import '../../css/e/efc5twbzw.css';
import '../../css/e/ec11lqblp.css';
import '../../css/b/ba6ljmmou.css';
import '../../css/b/bap6zbcww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGdT9BMcef" cx="6.81" cy="6.33" r="23.15" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="ghf6c4b7u wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="efc5twbzw wm-a"/><path fill="url(#SVGdT9BMcef)" class="ec11lqblp wm-k"/><path fill="url(#SVGDCUexbkg)" class="ba6ljmmou wm-a"/><path class="bap6zbcww wm-shine"/></g>`,
		"fallback": "withicons-rangoli:avatar-unicorn",
	});
}

export default Component;
