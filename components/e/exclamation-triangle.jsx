import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikia-1bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikia-1bis"/>`,
		"fallback": "humbleicons:exclamation-triangle",
	});
}

export default Component;
