import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iqke0hhzk.css';
import '../../css/h/h3j66jbeo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="iqke0hhzk"/><path class="h3j66jbeo"/></g>`,
		"fallback": "cryptocurrency-color:deez",
	});
}

export default Component;
