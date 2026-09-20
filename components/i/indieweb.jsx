import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeuyv8bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeuyv8bjl"/>`,
		"fallback": "thesvg-color:indieweb",
	});
}

export default Component;
