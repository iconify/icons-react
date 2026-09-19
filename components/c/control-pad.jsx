import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uaw8cbbjh.css';
import '../../css/e/e0xgto1ad.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="uaw8cbbjh"/><path class="e0xgto1ad"/></g>`,
		"fallback": "si-glyph:control-pad",
	});
}

export default Component;
