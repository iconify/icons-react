import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwroy4t3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwroy4t3p"/>`,
		"fallback": "ri:gemini-fill",
	});
}

export default Component;
