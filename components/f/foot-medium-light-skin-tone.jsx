import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7tqjubdl.css';
import '../../css/r/r29e_s_lw.css';
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
		"content": `<path class="h7tqjubdl"/><path class="r29e_s_lw"/><g class="z04drlb1l"><path class="swak8ubny"/><path class="zja7hrpwx"/></g>`,
		"fallback": "openmoji:foot-medium-light-skin-tone",
	});
}

export default Component;
