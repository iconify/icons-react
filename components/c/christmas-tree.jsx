import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/sza00vb0m.css';
import '../../css/f/fora16m7m.css';
import '../../css/e/etmubznfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGnOC7Nc1E" x1="8.99" x2="14.99" y1="1" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGnOC7Nc1E)" class="sza00vb0m"/><path class="fora16m7m wm-a"/><path class="etmubznfe wm-shine"/></g>`,
		"fallback": "withicons-utsav:christmas-tree",
	});
}

export default Component;
