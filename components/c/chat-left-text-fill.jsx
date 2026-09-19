import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcdconbhm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcdconbhm"/>`,
		"fallback": "bi:chat-left-text-fill",
	});
}

export default Component;
