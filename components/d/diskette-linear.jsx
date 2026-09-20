import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/orqtdgb5k.css';
import '../../css/o/onymejbgu.css';
import '../../css/k/kt1ahab5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="orqtdgb5k"/><path class="onymejbgu"/><path class="kt1ahab5v"/></g>`,
		"fallback": "solar:diskette-linear",
	});
}

export default Component;
