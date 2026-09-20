import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esgu39jto.css';
import '../../css/j/j9zhcjcel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="esgu39jto"/><path class="j9zhcjcel"/></g>`,
		"fallback": "lets-icons:in",
	});
}

export default Component;
