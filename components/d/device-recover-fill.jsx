import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdyi365ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdyi365ji"/>`,
		"fallback": "ri:device-recover-fill",
	});
}

export default Component;
