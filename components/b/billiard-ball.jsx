import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m2pzl820n.css';
import '../../css/r/r5w4_ixac.css';
import '../../css/f/f_lm5wbro.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m2pzl820n"/><path class="r5w4_ixac"/><path class="f_lm5wbro"/></g>`,
		"fallback": "si-glyph:billiard-ball",
	});
}

export default Component;
