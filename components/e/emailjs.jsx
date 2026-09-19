import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upn1q9b9c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upn1q9b9c"/>`,
		"fallback": "devicon:emailjs",
	});
}

export default Component;
