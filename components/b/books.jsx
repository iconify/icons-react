import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwz1onbzm.css';
import '../../css/u/ujwe30bnu.css';
import '../../css/q/q9h09_bxm.css';
import '../../css/s/sdsw_p56g.css';
import '../../css/v/vu1pckbyw.css';
import '../../css/y/yrp160_mj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="nwz1onbzm"/><path class="ujwe30bnu"/><rect class="q9h09_bxm"/><path class="sdsw_p56g"/><path clip-rule="evenodd" class="vu1pckbyw"/><path class="yrp160_mj"/></g>`,
		"fallback": "glyphs-poly:books",
	});
}

export default Component;
