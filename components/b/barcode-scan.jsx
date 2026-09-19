import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aq0r-rk9e.css';
import '../../css/i/imi_ebbbr.css';
import '../../css/r/rlrjkrbhz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aq0r-rk9e"/><path class="imi_ebbbr"/><path class="rlrjkrbhz"/></g>`,
		"fallback": "glyphs-poly:barcode-scan",
	});
}

export default Component;
