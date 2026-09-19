import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/teym6dbao.css';
import '../../css/c/cx4p_crli.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="teym6dbao"/><path class="cx4p_crli"/></g>`,
		"fallback": "si-glyph:blood-bag",
	});
}

export default Component;
