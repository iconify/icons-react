import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiyr2hb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiyr2hb8l"/>`,
		"fallback": "mdi:clipboard-remove-outline",
	});
}

export default Component;
