import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz2q7telr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz2q7telr"/>`,
		"fallback": "ri:corner-right-down-fill",
	});
}

export default Component;
