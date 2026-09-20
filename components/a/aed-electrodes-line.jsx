import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejx6idb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejx6idb4q"/>`,
		"fallback": "ri:aed-electrodes-line",
	});
}

export default Component;
