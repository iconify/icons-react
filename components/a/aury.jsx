import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pr1o3kbqt.css';
import '../../css/g/gjda1obdd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="pr1o3kbqt"/><path class="gjda1obdd"/></g>`,
		"fallback": "cryptocurrency-color:aury",
	});
}

export default Component;
