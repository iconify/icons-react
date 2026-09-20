import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/te7m9gbpl.css';
import '../../css/t/tbunc_byf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="te7m9gbpl"/><path class="tbunc_byf"/></g>`,
		"fallback": "streamline-color:arrow-crossover-down-flat",
	});
}

export default Component;
