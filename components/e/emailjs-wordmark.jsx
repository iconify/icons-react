import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/der1z-x1u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="der1z-x1u"/>`,
		"fallback": "devicon-plain:emailjs-wordmark",
	});
}

export default Component;
