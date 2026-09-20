import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu5ws2blr.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu5ws2blr"/>`,
		"fallback": "jam:baseball",
	});
}

export default Component;
