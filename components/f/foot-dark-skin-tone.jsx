import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj_n4-bzu.css';
import '../../css/q/qq4sgukxb.css';
import '../../css/z/z04drlb1l.css';
import '../../css/s/swak8ubny.css';
import '../../css/z/zja7hrpwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj_n4-bzu"/><path class="qq4sgukxb"/><g class="z04drlb1l"><path class="swak8ubny"/><path class="zja7hrpwx"/></g>`,
		"fallback": "openmoji:foot-dark-skin-tone",
	});
}

export default Component;
