import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jlvd7qbqe.css';
import '../../css/h/hj4r-nevc.css';
import '../../css/v/vdlyjmopo.css';
import '../../css/x/xrqeuen_t.css';
import '../../css/f/f0xsko-4b.css';
import '../../css/g/guqhbex6p.css';
import '../../css/s/s1kut8o6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jlvd7qbqe wm-k"/><path class="hj4r-nevc wm-a"/><path class="vdlyjmopo wm-s"/><path class="wm-shadow xrqeuen_t"/><path class="f0xsko-4b wm-k"/><path class="guqhbex6p wm-a"/><path class="s1kut8o6j wm-s"/></g>`,
		"fallback": "withicons:avatar-alien-engrave",
	});
}

export default Component;
