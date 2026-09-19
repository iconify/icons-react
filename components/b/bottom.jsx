import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy692n8eh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy692n8eh"/>`,
		"fallback": "ep:bottom",
	});
}

export default Component;
