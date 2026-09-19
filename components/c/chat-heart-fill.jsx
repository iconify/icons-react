import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-2oxgbzt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-2oxgbzt"/>`,
		"fallback": "bi:chat-heart-fill",
	});
}

export default Component;
