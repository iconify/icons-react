import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/feesd1_rx.css';
import '../../css/f/f-md5jbfm.css';
import '../../css/t/t0zturbjd.css';
import '../../css/c/cijadq71m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="feesd1_rx"/><path class="f-md5jbfm"/><path class="t0zturbjd"/><path class="cijadq71m"/></g>`,
		"fallback": "glyphs:bandage-1-duo",
	});
}

export default Component;
