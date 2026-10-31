import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/t73hblbfo.css';
import '../../css/m/mu12y_xtk.css';
import '../../css/r/ri4pm-bft.css';
import '../../css/n/nkkz94gxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG6flWrdPZ" x1="8.99" x2="14.99" y1="4.01" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG6flWrdPZ)" class="t73hblbfo"/><path class="mu12y_xtk wm-shine"/><path class="ri4pm-bft wm-shine"/><path class="nkkz94gxq wm-shine"/></g>`,
		"fallback": "withicons-utsav:folder-open",
	});
}

export default Component;
