import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6a4tubxm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6a4tubxm"/>`,
		"fallback": "bi:chat-right-text-fill",
	});
}

export default Component;
