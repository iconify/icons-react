import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuptu5b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuptu5b3s"/>`,
		"fallback": "mdi:information-slab-circle-outline",
	});
}

export default Component;
