import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/f6i24rbge.css';
import '../../css/c/cbl97ndnw.css';
import '../../css/r/rzgfvxbho.css';
import '../../css/x/xnp8_zb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9Rd0vb7z" x1="9" x2="15" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9Rd0vb7z)" class="f6i24rbge"/><path class="cbl97ndnw wm-shine"/><path class="rzgfvxbho wm-shine"/><path class="wm-shine xnp8_zb4z"/></g>`,
		"fallback": "withicons-utsav:accessibility",
	});
}

export default Component;
