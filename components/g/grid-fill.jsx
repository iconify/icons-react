import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtq7a3bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtq7a3bun"/>`,
		"fallback": "ri:grid-fill",
	});
}

export default Component;
