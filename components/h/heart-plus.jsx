import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7hz3j1pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7hz3j1pu"/>`,
		"fallback": "mdi:heart-plus",
	});
}

export default Component;
