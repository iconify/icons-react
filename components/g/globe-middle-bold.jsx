import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpin_ybto.css';
import '../../css/e/ecby_rb4p.css';
import '../../css/x/xor-uacie.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bpin_ybto"/><path clip-rule="evenodd" class="ecby_rb4p"/><path class="xor-uacie"/></g>`,
		"fallback": "glyphs:globe-middle-bold",
	});
}

export default Component;
