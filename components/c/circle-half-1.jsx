import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0c3j_bcd.css';
import '../../css/e/efbw3gbbv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0c3j_bcd"/><path clip-rule="evenodd" class="efbw3gbbv"/></g>`,
		"fallback": "glyphs-poly:circle-half-1",
	});
}

export default Component;
