import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch2api_-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch2api_-x"/>`,
		"fallback": "keyline-icons:bookmark-sharp-fill",
	});
}

export default Component;
