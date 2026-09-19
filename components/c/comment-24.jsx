import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbbx036yl.css';
import '../../css/f/fk3i-830m.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/n/npyhkyrja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGUdQdGcMU)" class="qbbx036yl"/><defs><radialGradient id="SVGUdQdGcMU" cx="0" cy="0" r="1" gradientTransform="rotate(48.112 1.88 -4.353)scale(35.9314 65.1687)" gradientUnits="userSpaceOnUse"><stop class="fk3i-830m"/><stop offset=".535" class="h0zqot9pw"/><stop offset="1" class="npyhkyrja"/></radialGradient></defs></g>`,
		"fallback": "fluent-color:comment-24",
	});
}

export default Component;
