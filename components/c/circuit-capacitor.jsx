import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmq9ty05e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmq9ty05e"/>`,
		"fallback": "tabler:circuit-capacitor",
	});
}

export default Component;
