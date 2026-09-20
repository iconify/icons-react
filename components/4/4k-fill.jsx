import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n81tg5d5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n81tg5d5o"/>`,
		"fallback": "ri:4k-fill",
	});
}

export default Component;
