import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/remm99byw.css';
import '../../css/t/tx8onvulw.css';
import '../../css/x/x2ydylbgr.css';
import '../../css/f/fpt8y7b2h.css';
import '../../css/o/o4y1xcbsa.css';
import '../../css/s/sfjtq6vjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="remm99byw wm-shadow"/><path class="tx8onvulw"/><path class="x2ydylbgr"/><path class="fpt8y7b2h"/><path class="o4y1xcbsa"/><path class="sfjtq6vjf wm-s"/></g>`,
		"fallback": "withicons-retro:cloud-download",
	});
}

export default Component;
