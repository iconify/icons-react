import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpj9x5mgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpj9x5mgh"/>`,
		"fallback": "mdi:aws",
	});
}

export default Component;
