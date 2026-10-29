import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f_hoxjmun.css';
import '../../css/f/f6jryfoml.css';
import '../../css/s/s8lza-b-b.css';
import '../../css/s/s0uk8_bdj.css';
import '../../css/f/f9b4d59gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f_hoxjmun wm-k"/><path class="f6jryfoml wm-s"/><path class="s8lza-b-b wm-shadow"/><path class="s0uk8_bdj wm-k"/><path class="f9b4d59gs wm-s"/></g>`,
		"fallback": "withicons:filter-x-engrave",
	});
}

export default Component;
