import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3xahsb8b.css';
import '../../css/h/hb4c_bboa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p3xahsb8b"/><rect class="hb4c_bboa"/></g>`,
		"fallback": "glyphs:celsius-bold",
	});
}

export default Component;
