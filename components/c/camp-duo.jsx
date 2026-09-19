import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j07se6udc.css';
import '../../css/d/dr15u0bie.css';
import '../../css/v/vqlwd60yd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j07se6udc"/><path class="dr15u0bie"/><path class="vqlwd60yd"/></g>`,
		"fallback": "glyphs:camp-duo",
	});
}

export default Component;
