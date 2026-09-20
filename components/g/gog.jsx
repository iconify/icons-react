import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgbnv1b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgbnv1b-h"/>`,
		"fallback": "token:gog",
	});
}

export default Component;
