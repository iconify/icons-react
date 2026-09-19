import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfc4iruyy.css';
import '../../css/q/qadwn_bgu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qfc4iruyy"/><path class="qadwn_bgu"/></g>`,
		"fallback": "glyphs:aperture-bold",
	});
}

export default Component;
