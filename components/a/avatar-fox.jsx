import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/e/edo86bb3h.css';
import '../../css/s/s93eihl1p.css';
import '../../css/a/aafywpkqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGoUoNHduM" cx="7.86" cy="6.89" r="23.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="edo86bb3h wm-shadow"/><path fill="url(#SVGoUoNHduM)" class="s93eihl1p wm-k"/><path class="aafywpkqt wm-shine"/></g>`,
		"fallback": "withicons-rangoli:avatar-fox",
	});
}

export default Component;
