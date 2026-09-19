import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mbjjc0b0k.css';
import '../../css/j/jau84cbdu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mbjjc0b0k"/><path class="jau84cbdu"/></g>`,
		"fallback": "glyphs:calendar-duo",
	});
}

export default Component;
