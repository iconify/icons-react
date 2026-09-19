import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie7_4lbaa.css';
import '../../css/i/i93i2hbjv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ie7_4lbaa"/><path class="i93i2hbjv"/></g>`,
		"fallback": "glyphs:grid-duo",
	});
}

export default Component;
