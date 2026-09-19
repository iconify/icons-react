import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1oyp3b8z.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1oyp3b8z"/>`,
		"fallback": "fa7-solid:braille",
	});
}

export default Component;
