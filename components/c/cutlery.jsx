import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it86vwbog.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it86vwbog"/>`,
		"fallback": "jam:cutlery",
	});
}

export default Component;
