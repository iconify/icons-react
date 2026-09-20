import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j06br4mtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j06br4mtp"/>`,
		"fallback": "ri:expand-vertical-line",
	});
}

export default Component;
