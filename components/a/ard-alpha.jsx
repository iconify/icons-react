import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1hyo6bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1hyo6bsg"/>`,
		"fallback": "cbi:ard-alpha",
	});
}

export default Component;
