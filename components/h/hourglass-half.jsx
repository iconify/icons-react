import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntydcxbau.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntydcxbau"/>`,
		"fallback": "fa7-regular:hourglass-half",
	});
}

export default Component;
