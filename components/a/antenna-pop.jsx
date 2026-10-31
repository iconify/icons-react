import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocnwhlbir.css';
import '../../css/r/ryhs8jbbs.css';
import '../../css/o/oa2cp2bee.css';
import '../../css/o/o_ue1-ztq.css';
import '../../css/p/psj_hm_ns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocnwhlbir"/><path class="ryhs8jbbs"/><path class="oa2cp2bee"/><path class="o_ue1-ztq"/><path class="psj_hm_ns"/></g>`,
		"fallback": "streamline-kameleon-color:antenna-pop",
	});
}

export default Component;
