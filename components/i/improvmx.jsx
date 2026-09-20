import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2g8xf7jh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2g8xf7jh"/>`,
		"fallback": "thesvg-color:improvmx",
	});
}

export default Component;
