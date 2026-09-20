import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p28dy6bfv.css';
import '../../css/a/ab59mj09g.css';
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
		"content": `<path class="p28dy6bfv"/><path class="ab59mj09g"/><g class="z04drlb1l"><path class="swak8ubny"/><path class="zja7hrpwx"/></g>`,
		"fallback": "openmoji:foot",
	});
}

export default Component;
