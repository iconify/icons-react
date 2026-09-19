import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8tsarjvu.css';
import '../../css/j/jpoubbo_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8tsarjvu"/><path class="jpoubbo_e"/>`,
		"fallback": "boxicons:bar-chart-square",
	});
}

export default Component;
