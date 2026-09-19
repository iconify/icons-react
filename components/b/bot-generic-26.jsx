import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu22mfb8u.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu22mfb8u"/>`,
		"fallback": "garden:bot-generic-26",
	});
}

export default Component;
