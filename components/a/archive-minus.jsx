import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o4bjhoboa.css';
import '../../css/j/j1_g_if2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o4bjhoboa"/><path class="j1_g_if2b"/></g>`,
		"fallback": "reicon:archive-minus",
	});
}

export default Component;
