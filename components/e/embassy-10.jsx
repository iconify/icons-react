import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niohfvb9x.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niohfvb9x"/>`,
		"fallback": "osmic:embassy-10",
	});
}

export default Component;
