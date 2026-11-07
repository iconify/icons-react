import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5g6wl4un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u5g6wl4un"/>`,
		"fallback": "solar:archive-up-outline",
	});
}

export default Component;
