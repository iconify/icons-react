import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieo8ob-ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieo8ob-ai"/>`,
		"fallback": "mdi:assignment-returned",
	});
}

export default Component;
