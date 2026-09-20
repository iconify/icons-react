import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtwkcjbbe.css';
import '../../css/h/h14wb-bal.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jtwkcjbbe"/><path class="h14wb-bal"/></g>`,
		"fallback": "streamline-color:arrow-cursor-2",
	});
}

export default Component;
