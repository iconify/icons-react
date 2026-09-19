import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxy8j9bns.css';
import '../../css/c/camy_vbrh.css';
import '../../css/z/zsm97zbyj.css';
import '../../css/a/asgrtlbso.css';
import '../../css/i/iad76iwuh.css';
import '../../css/n/nidx2acym.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kxy8j9bns"/><path clip-rule="evenodd" class="camy_vbrh"/><path class="zsm97zbyj"/><rect class="asgrtlbso"/><rect transform="matrix(-1 0 0 1 59 52.371)" class="iad76iwuh"/><path class="nidx2acym"/></g>`,
		"fallback": "glyphs-poly:car-wash",
	});
}

export default Component;
