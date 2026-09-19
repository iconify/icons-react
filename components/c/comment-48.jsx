import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exn61flyo.css';
import '../../css/f/fk3i-830m.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/n/npyhkyrja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGAHZ8pd3f)" class="exn61flyo"/><defs><radialGradient id="SVGAHZ8pd3f" cx="0" cy="0" r="1" gradientTransform="rotate(48.164 3.778 -8.71)scale(71.9357 130.443)" gradientUnits="userSpaceOnUse"><stop class="fk3i-830m"/><stop offset=".535" class="h0zqot9pw"/><stop offset="1" class="npyhkyrja"/></radialGradient></defs></g>`,
		"fallback": "fluent-color:comment-48",
	});
}

export default Component;
