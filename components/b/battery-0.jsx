import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgqf5jggr.css';
import '../../css/d/dknmr6bai.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tgqf5jggr"/><path class="dknmr6bai"/></g>`,
		"fallback": "glyphs-poly:battery-0",
	});
}

export default Component;
