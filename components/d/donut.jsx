import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/a/ah7ijw0qb.css';
import '../../css/c/ctju0gm5y.css';
import '../../css/x/xk7ro3ehw.css';
import '../../css/e/eu29tyjjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9Rd0vb7z" x1="9" x2="15" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9Rd0vb7z)" class="ah7ijw0qb"/><path class="ctju0gm5y wm-shine"/><path class="wm-shine xk7ro3ehw"/><path class="eu29tyjjn wm-shine"/></g>`,
		"fallback": "withicons-utsav:donut",
	});
}

export default Component;
