import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/l/lf6tqp4ti.css';
import '../../css/h/hl0obe14h.css';
import '../../css/n/n8_i-z38z.css';
import '../../css/c/cqou-fjdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9Rd0vb7z" x1="9" x2="15" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9Rd0vb7z)" class="lf6tqp4ti"/><path class="hl0obe14h wm-shine"/><path class="n8_i-z38z wm-shine"/><path class="cqou-fjdn wm-shine"/></g>`,
		"fallback": "withicons-utsav:circle-arrow-left",
	});
}

export default Component;
