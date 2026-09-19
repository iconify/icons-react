import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl3hfwebj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl3hfwebj"/>`,
		"fallback": "bi:chat-left-heart-fill",
	});
}

export default Component;
