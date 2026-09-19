import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g7s7v3dwf.css';
import '../../css/h/h_no2wbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g7s7v3dwf"/><path class="h_no2wbte"/></g>`,
		"fallback": "hugeicons:cursor-in-window",
	});
}

export default Component;
