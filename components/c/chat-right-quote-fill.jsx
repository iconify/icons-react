import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgc4r4n1b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgc4r4n1b"/>`,
		"fallback": "bi:chat-right-quote-fill",
	});
}

export default Component;
