import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyhzatesg.css';
import '../../css/o/orfd85byc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="wyhzatesg"/><path class="orfd85byc"/></g>`,
		"fallback": "cryptocurrency-color:dlt",
	});
}

export default Component;
