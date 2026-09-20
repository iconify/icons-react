import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzd4-tbsl.css';
import '../../css/x/x3z1wibsp.css';
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
		"content": `<path class="tzd4-tbsl"/><path class="x3z1wibsp"/><g class="z04drlb1l"><path class="swak8ubny"/><path class="zja7hrpwx"/></g>`,
		"fallback": "openmoji:foot-light-skin-tone",
	});
}

export default Component;
