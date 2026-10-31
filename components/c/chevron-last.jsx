import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/ty90m4b2c.css';
import '../../css/w/wxu883b9f.css';
import '../../css/u/ukh7eo06e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyhqXSd5V" x1="9.75" x2="13.75" y1="5.02" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ty90m4b2c wm-k"/><path class="wm-deco wxu883b9f"/><path fill="url(#SVGyhqXSd5V)" class="ukh7eo06e wm-k"/></g>`,
		"fallback": "withicons-valentine:chevron-last",
	});
}

export default Component;
