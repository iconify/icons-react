import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/b/bkidd7bto.css';
import '../../css/p/p_be3ubrk.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="bkidd7bto"/><path class="p_be3ubrk"/></g>`,
		"fallback": "system-uicons:calendar-move",
	});
}

export default Component;
