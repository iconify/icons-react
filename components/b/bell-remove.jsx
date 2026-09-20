import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caz0ggb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caz0ggb9d"/>`,
		"fallback": "mdi:bell-remove",
	});
}

export default Component;
