import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4rargb_i.css';
import '../../css/z/zu0r11hoa.css';
import '../../css/u/u80fwbejn.css';
import '../../css/t/tytii4j6e.css';
import '../../css/c/ccblr5byi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b4rargb_i"/><path class="zu0r11hoa"/><path class="u80fwbejn"/><path class="tytii4j6e"/><path class="ccblr5byi"/></g>`,
		"fallback": "streamline-color:earth-airplane",
	});
}

export default Component;
