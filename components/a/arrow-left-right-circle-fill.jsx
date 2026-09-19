import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa6k-acml.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa6k-acml"/>`,
		"fallback": "f7:arrow-left-right-circle-fill",
	});
}

export default Component;
