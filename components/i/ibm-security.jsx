import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlg1h8epy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlg1h8epy"/>`,
		"fallback": "carbon:ibm-security",
	});
}

export default Component;
