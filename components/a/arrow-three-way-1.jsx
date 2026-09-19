import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y7o6g0b0e.css';
import '../../css/x/xgt-wmift.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="y7o6g0b0e"/><path class="xgt-wmift"/></g>`,
		"fallback": "si-glyph:arrow-three-way-1",
	});
}

export default Component;
