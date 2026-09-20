import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kg0x6zv7x.css';
import '../../css/z/zq343sb3l.css';
import '../../css/v/viq4-gbyg.css';
import '../../css/c/casnwej3p.css';
import '../../css/x/xuoi0ccdm.css';

const viewBox = {"width":85,"height":107};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kg0x6zv7x"/><path fill="url(#SVGWEpgEcUD)" class="zq343sb3l"/><path class="viq4-gbyg"/><defs><linearGradient id="SVGWEpgEcUD" x1="22.47" x2="69.145" y1="107" y2="84.947" gradientUnits="userSpaceOnUse"><stop class="casnwej3p"/><stop offset="1" class="xuoi0ccdm"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:astro-dark",
	});
}

export default Component;
