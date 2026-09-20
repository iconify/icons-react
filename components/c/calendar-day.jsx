import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/odhkjiskl.css';
import '../../css/n/nmniye7ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="odhkjiskl"/><path class="nmniye7ig"/></g>`,
		"fallback": "reicon:calendar-day",
	});
}

export default Component;
