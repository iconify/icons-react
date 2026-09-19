import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qan8l4b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qan8l4b2h"/>`,
		"fallback": "griddy-icons:cloud-filled",
	});
}

export default Component;
