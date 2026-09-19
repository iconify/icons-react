import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pun70et_r.css';
import '../../css/d/dooxuccgb.css';
import '../../css/s/sgdoyealj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pun70et_r"/><path class="dooxuccgb"/><path class="sgdoyealj"/></g>`,
		"fallback": "si-glyph:bag",
	});
}

export default Component;
