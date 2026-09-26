import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu2a-wbcj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu2a-wbcj"/>`,
		"fallback": "at-icons:grabber-dots",
	});
}

export default Component;
