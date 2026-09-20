import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcd7ccb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcd7ccb3e"/>`,
		"fallback": "si:arrow-left-circle-line",
	});
}

export default Component;
