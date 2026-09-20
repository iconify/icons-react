import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj1hmv_zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj1hmv_zo"/>`,
		"fallback": "lucide:book-audio",
	});
}

export default Component;
