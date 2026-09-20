import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwoppqi1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwoppqi1e"/>`,
		"fallback": "reicon:broom-filled",
	});
}

export default Component;
