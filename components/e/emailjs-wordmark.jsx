import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqraoh7pn.css';
import '../../css/a/a7w15ebva.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqraoh7pn"/><path class="a7w15ebva"/>`,
		"fallback": "devicon:emailjs-wordmark",
	});
}

export default Component;
