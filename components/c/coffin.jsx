import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/f3kkc5b0k.css';
import '../../css/j/jdhw2fvth.css';
import '../../css/r/r2w8qjzjn.css';
import '../../css/i/ids_7eluo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9Rd0vb7z" x1="9" x2="15" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9Rd0vb7z)" class="f3kkc5b0k"/><path class="jdhw2fvth wm-shine"/><path class="r2w8qjzjn wm-shine"/><path class="ids_7eluo wm-shine"/></g>`,
		"fallback": "withicons-utsav:coffin",
	});
}

export default Component;
