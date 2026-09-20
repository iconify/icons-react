import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dk1ibdb3j.css';
import '../../css/h/hm-1k2z1m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dk1ibdb3j"/><path class="hm-1k2z1m"/></g>`,
		"fallback": "streamline-flex-color:calendar-mark-flat",
	});
}

export default Component;
