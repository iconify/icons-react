import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0c3j_bcd.css';
import '../../css/a/ax23_6bgv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0c3j_bcd"/><path clip-rule="evenodd" class="ax23_6bgv"/></g>`,
		"fallback": "glyphs-poly:circle-half-2",
	});
}

export default Component;
