import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/onyassb0j.css';
import '../../css/x/x95a5fbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="onyassb0j"/><path class="x95a5fbon"/></g>`,
		"fallback": "hugeicons:calendar-sync",
	});
}

export default Component;
