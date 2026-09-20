import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-4swvbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-4swvbdj"/>`,
		"fallback": "ri:dice-fill",
	});
}

export default Component;
