import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycgag8hrv.css';
import '../../css/o/o2hokvbbk.css';
import '../../css/f/ft-ma4kga.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ycgag8hrv"/><path class="o2hokvbbk"/><path class="ft-ma4kga"/></g>`,
		"fallback": "glyphs:arrow-solid-line-end-bold",
	});
}

export default Component;
