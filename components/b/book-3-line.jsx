import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wia3r3wym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wia3r3wym"/>`,
		"fallback": "ri:book-3-line",
	});
}

export default Component;
