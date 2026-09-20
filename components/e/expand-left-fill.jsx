import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf1epnbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf1epnbow"/>`,
		"fallback": "ri:expand-left-fill",
	});
}

export default Component;
