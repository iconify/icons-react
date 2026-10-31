import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/txyf44b7q.css';
import '../../css/g/g_axfdlrn.css';
import '../../css/p/pltr2wbgc.css';
import '../../css/r/re4ukw45c.css';
import '../../css/g/go6nlobpn.css';
import '../../css/t/txv7iwbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="txyf44b7q wm-shadow"/><path class="g_axfdlrn"/><path class="pltr2wbgc"/><path class="re4ukw45c"/><path class="go6nlobpn"/><path class="txv7iwbrn"/></g>`,
		"fallback": "withicons-retro:drumstick",
	});
}

export default Component;
