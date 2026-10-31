import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/zvsqa6xmw.css';
import '../../css/u/uadlsb8iy.css';
import '../../css/q/qs8-lxbxd.css';
import '../../css/u/u6sedvbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="zvsqa6xmw"/><path class="uadlsb8iy wm-shine"/><path class="qs8-lxbxd wm-shine"/><path class="u6sedvbci wm-shine"/></g>`,
		"fallback": "withicons-utsav:file-text",
	});
}

export default Component;
