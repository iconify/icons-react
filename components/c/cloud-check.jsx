import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f_-aaibse.css';
import '../../css/t/tx8onvulw.css';
import '../../css/a/ayo4sbmku.css';
import '../../css/u/u5ywn2hcc.css';
import '../../css/o/o4y1xcbsa.css';
import '../../css/f/ftfqrc6xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f_-aaibse wm-shadow"/><path class="tx8onvulw"/><path class="ayo4sbmku"/><path class="u5ywn2hcc"/><path class="o4y1xcbsa"/><path class="ftfqrc6xo wm-s"/></g>`,
		"fallback": "withicons-retro:cloud-check",
	});
}

export default Component;
