import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp6bi2wym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp6bi2wym"/>`,
		"fallback": "mingcute:arrow-down-circle-line",
	});
}

export default Component;
