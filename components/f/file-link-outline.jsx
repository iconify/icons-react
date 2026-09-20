import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-3wim6xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-3wim6xh"/>`,
		"fallback": "mdi:file-link-outline",
	});
}

export default Component;
