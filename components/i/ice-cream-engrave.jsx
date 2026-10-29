import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f-7gy5byl.css';
import '../../css/z/zuxl2frha.css';
import '../../css/y/ynuqnnqzn.css';
import '../../css/t/t6q0p4bxh.css';
import '../../css/e/efpyzhttl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f-7gy5byl wm-k"/><path class="wm-a zuxl2frha"/><path class="wm-shadow ynuqnnqzn"/><path class="t6q0p4bxh wm-k"/><path class="efpyzhttl wm-a"/></g>`,
		"fallback": "withicons:ice-cream-engrave",
	});
}

export default Component;
