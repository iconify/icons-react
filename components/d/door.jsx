import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/br67vwbhz.css';
import '../../css/d/dfrq1hbwc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="br67vwbhz"/><path class="dfrq1hbwc"/></g>`,
		"fallback": "glyphs-poly:door",
	});
}

export default Component;
