import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px6dnbcps.css';
import '../../css/g/g1nwbccdv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="px6dnbcps"/><path class="g1nwbccdv"/></g>`,
		"fallback": "glyphs:check-double-bold",
	});
}

export default Component;
