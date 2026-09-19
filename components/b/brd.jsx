import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e5037rbnm.css';
import '../../css/o/os8o028bs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="e5037rbnm"/><path class="os8o028bs"/></g>`,
		"fallback": "cryptocurrency-color:brd",
	});
}

export default Component;
