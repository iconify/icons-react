import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdhpalb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdhpalb9c"/>`,
		"fallback": "mdi:arrow-up-thin",
	});
}

export default Component;
