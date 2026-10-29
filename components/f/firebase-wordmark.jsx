import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd9c_2bin.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd9c_2bin"/>`,
		"fallback": "devicon-plain:firebase-wordmark",
	});
}

export default Component;
