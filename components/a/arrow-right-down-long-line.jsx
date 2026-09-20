import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whsca8c2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whsca8c2e"/>`,
		"fallback": "ri:arrow-right-down-long-line",
	});
}

export default Component;
