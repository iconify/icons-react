import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deu9usb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deu9usb0q"/>`,
		"fallback": "hugeicons:apple-news",
	});
}

export default Component;
