import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h8xub9bvx.css';
import '../../css/u/u94jc6b_g.css';
import '../../css/a/a_y8s9b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h8xub9bvx"/><path class="u94jc6b_g wm-shadow"/><path class="a_y8s9b1k"/></g>`,
		"fallback": "withicons:audio-waveform-engrave",
	});
}

export default Component;
