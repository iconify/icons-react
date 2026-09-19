import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhx1jm7tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhx1jm7tb"/>`,
		"fallback": "cbi:garage-4-prong",
	});
}

export default Component;
