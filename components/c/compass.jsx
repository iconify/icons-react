import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0c3j_bcd.css';
import '../../css/v/v8mghcbyq.css';
import '../../css/z/zdnmwab-e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0c3j_bcd"/><path class="v8mghcbyq"/><path class="zdnmwab-e"/></g>`,
		"fallback": "glyphs-poly:compass",
	});
}

export default Component;
