import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/j2s9jqr8g.css';
import '../../css/c/c6pngfbud.css';
import '../../css/f/f2a-fpbrr.css';
import '../../css/f/f-__axb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNlVPeb8B" x1="9" x2="15" y1="4.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGNlVPeb8B)" class="j2s9jqr8g"/><path class="c6pngfbud wm-shine"/><path class="f2a-fpbrr wm-shine"/><path class="f-__axb3u wm-shine"/></g>`,
		"fallback": "withicons-utsav:gamepad",
	});
}

export default Component;
