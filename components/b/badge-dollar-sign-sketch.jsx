import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ymm2nhd-k.css';
import '../../css/m/m6g9ed77n.css';
import '../../css/r/ri15-6vbx.css';
import '../../css/m/mkbyrcbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ymm2nhd-k"/><path class="m6g9ed77n wm-a"/><path class="ri15-6vbx wm-k"/><path class="mkbyrcbue wm-a"/></g>`,
		"fallback": "withicons:badge-dollar-sign-sketch",
	});
}

export default Component;
