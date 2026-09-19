import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abbv8_b5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abbv8_b5y"/>`,
		"fallback": "griddy-icons:chart-bar-square-filled",
	});
}

export default Component;
