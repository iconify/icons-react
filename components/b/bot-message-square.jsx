import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/s/siv_bsrfa.css';
import '../../css/u/u097dcb6i.css';
import '../../css/s/s08sg_bgh.css';
import '../../css/c/cp-ektmmr.css';
import '../../css/u/uq1x7cb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="siv_bsrfa"/><path class="u097dcb6i"/><path class="s08sg_bgh"/><path class="cp-ektmmr"/><path class="uq1x7cb8s"/></g>`,
		"fallback": "withicons-retro:bot-message-square",
	});
}

export default Component;
