import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6alpqpzx.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6alpqpzx"/>`,
		"fallback": "jam:home-f",
	});
}

export default Component;
