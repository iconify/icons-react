import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3l2h_b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3l2h_b5w"/>`,
		"fallback": "uil:atm-card",
	});
}

export default Component;
