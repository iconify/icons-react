import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zng0uibdx.css';
import '../../css/m/mjwxlvbsh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zng0uibdx"/><path class="mjwxlvbsh"/></g>`,
		"fallback": "si-glyph:airplane",
	});
}

export default Component;
