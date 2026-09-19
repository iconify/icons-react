import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_61yfbla.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_61yfbla"/>`,
		"fallback": "bi:chat-left-fill",
	});
}

export default Component;
