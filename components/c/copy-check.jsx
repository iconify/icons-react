import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wtma-w-nc.css';
import '../../css/v/v2daosb8o.css';
import '../../css/s/stezfm7vs.css';
import '../../css/s/sahnepblt.css';
import '../../css/g/gak_websu.css';
import '../../css/x/xn0nxebad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow wtma-w-nc"/><path class="v2daosb8o wm-shadow"/><path class="stezfm7vs"/><path class="sahnepblt"/><path class="gak_websu"/><path class="wm-s xn0nxebad"/></g>`,
		"fallback": "withicons-brutal:copy-check",
	});
}

export default Component;
