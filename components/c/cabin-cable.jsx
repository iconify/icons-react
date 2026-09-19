import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xrq3b_jvc.css';
import '../../css/q/qkxyfyb7g.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xrq3b_jvc"/><path class="qkxyfyb7g"/></g>`,
		"fallback": "si-glyph:cabin-cable",
	});
}

export default Component;
