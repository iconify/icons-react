import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mnx4x48_e.css';
import '../../css/r/r3ynygbhn.css';
import '../../css/v/vgwlu2rob.css';
import '../../css/t/t6gzoggtg.css';
import '../../css/m/mozz0kbwp.css';
import '../../css/w/w3sttqm3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mnx4x48_e wm-shadow"/><path class="r3ynygbhn"/><path class="vgwlu2rob"/><path class="t6gzoggtg"/><path class="mozz0kbwp"/><path class="w3sttqm3a"/></g>`,
		"fallback": "withicons-retro:basketball",
	});
}

export default Component;
