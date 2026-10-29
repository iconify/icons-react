import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d5qjcgzae.css';
import '../../css/p/pl4q9_bmp.css';
import '../../css/u/u3le6wqjc.css';
import '../../css/a/a7liucblh.css';
import '../../css/g/g8_iol2hx.css';
import '../../css/g/gaam40bfx.css';
import '../../css/g/gdnuq8wfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d5qjcgzae"/><path class="pl4q9_bmp"/><path class="u3le6wqjc"/><path class="a7liucblh"/><path class="g8_iol2hx wm-a"/><path class="gaam40bfx"/><path class="gdnuq8wfy"/></g>`,
		"fallback": "withicons:binoculars-duo",
	});
}

export default Component;
