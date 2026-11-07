import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i201z6bwc.css';
import '../../css/n/nhyj9zb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i201z6bwc"/><path clip-rule="evenodd" class="nhyj9zb8o"/>`,
		"fallback": "solar:cup-first-outline",
	});
}

export default Component;
