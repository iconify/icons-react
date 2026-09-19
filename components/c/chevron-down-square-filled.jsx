import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj3qj13na.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj3qj13na"/>`,
		"fallback": "boxicons:chevron-down-square-filled",
	});
}

export default Component;
