import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2b7c5wsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2b7c5wsa"/>`,
		"fallback": "thesvg-color:have-i-been-pwned",
	});
}

export default Component;
