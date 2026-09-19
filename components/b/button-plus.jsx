import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mz-_i50lp.css';
import '../../css/v/vvhgcpb1v.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mz-_i50lp"/><path class="vvhgcpb1v"/></g>`,
		"fallback": "si-glyph:button-plus",
	});
}

export default Component;
