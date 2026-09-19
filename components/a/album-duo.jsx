import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phn313jkl.css';
import '../../css/x/x3-70tbts.css';
import '../../css/u/u_98p6ftd.css';
import '../../css/t/tyfm-kbgt.css';
import '../../css/h/hhgw1kb0y.css';
import '../../css/k/kvxz3fbir.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="phn313jkl"/><path class="x3-70tbts"/><path class="u_98p6ftd"/><path class="tyfm-kbgt"/><path class="hhgw1kb0y"/><path class="kvxz3fbir"/></g>`,
		"fallback": "glyphs:album-duo",
	});
}

export default Component;
