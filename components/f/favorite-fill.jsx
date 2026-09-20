import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psjehab6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psjehab6z"/>`,
		"fallback": "lets-icons:favorite-fill",
	});
}

export default Component;
