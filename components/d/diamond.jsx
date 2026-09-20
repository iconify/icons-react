import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/h/hl4ferbya.css';
import '../../css/b/b8u8w9tdh.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="hl4ferbya"/><path class="b8u8w9tdh"/></g>`,
		"fallback": "system-uicons:diamond",
	});
}

export default Component;
