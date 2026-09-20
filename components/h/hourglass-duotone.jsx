import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tcy-4kbqq.css';
import '../../css/j/j01bihj8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tcy-4kbqq"/><path class="j01bihj8h"/></g>`,
		"fallback": "keyline-icons:hourglass-duotone",
	});
}

export default Component;
