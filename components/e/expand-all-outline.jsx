import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndi6ggb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndi6ggb3r"/>`,
		"fallback": "mdi:expand-all-outline",
	});
}

export default Component;
