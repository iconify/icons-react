import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn2j9uzdd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn2j9uzdd"/>`,
		"fallback": "carbon:expand-screen",
	});
}

export default Component;
