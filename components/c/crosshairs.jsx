import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmpyq4bjh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmpyq4bjh"/>`,
		"fallback": "fa7-solid:crosshairs",
	});
}

export default Component;
