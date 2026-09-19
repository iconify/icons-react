import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh9nduq0e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh9nduq0e"/>`,
		"fallback": "ep:ice-tea",
	});
}

export default Component;
