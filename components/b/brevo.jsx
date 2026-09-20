import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoxr4ab1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoxr4ab1t"/>`,
		"fallback": "thesvg-color:brevo",
	});
}

export default Component;
