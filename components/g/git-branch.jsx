import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/f/f3wxfmftk.css';
import '../../css/a/ajqf0fb6g.css';
import '../../css/v/vlrb2hbjn.css';
import '../../css/m/mrgxhvkoe.css';
import '../../css/k/k4xv3bbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGexIMpcuO" cx="7.86" cy="6.46" r="24.57" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="f3wxfmftk wm-shadow"/><path fill="url(#SVGexIMpcuO)" class="ajqf0fb6g wm-k"/><path class="vlrb2hbjn wm-shine"/><path class="mrgxhvkoe wm-deco"/><path class="k4xv3bbgk wm-deco"/></g>`,
		"fallback": "withicons-rangoli:git-branch",
	});
}

export default Component;
