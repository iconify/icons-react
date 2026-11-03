import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chr1acb-v.css';
import '../../css/y/yugwo7b3o.css';
import '../../css/r/r_amhvbap.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/ubtitpbsd.css';
import '../../css/w/waf7g3b8h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chr1acb-v"/><path class="yugwo7b3o"/><path class="r_amhvbap"/><g class="ij2x_72vy"><path class="ubtitpbsd"/><path class="waf7g3b8h"/></g>`,
		"fallback": "openmoji:donkey",
	});
}

export default Component;
