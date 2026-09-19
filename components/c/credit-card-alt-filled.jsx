import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipjz1gbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipjz1gbfw"/>`,
		"fallback": "griddy-icons:credit-card-alt-filled",
	});
}

export default Component;
