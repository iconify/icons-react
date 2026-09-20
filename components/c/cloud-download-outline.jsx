import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbt3a1b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbt3a1b1h"/>`,
		"fallback": "mdi:cloud-download-outline",
	});
}

export default Component;
