import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/adrmc7b3i.css';
import '../../css/v/vlqhjbbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="adrmc7b3i"/><path class="vlqhjbbhb"/></g>`,
		"fallback": "hugeicons:android",
	});
}

export default Component;
