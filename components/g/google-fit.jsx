import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6la5k3mu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6la5k3mu"/>`,
		"fallback": "mdi:google-fit",
	});
}

export default Component;
