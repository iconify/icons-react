import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4xm48b4s.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4xm48b4s"/>`,
		"fallback": "jam:ice-cream-f",
	});
}

export default Component;
