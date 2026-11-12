import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yps82ibbn.css';

const viewBox = {"width":800,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yps82ibbn"/>`,
		"fallback": "thesvg-color:amplitude-icon",
	});
}

export default Component;
