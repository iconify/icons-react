import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5hxpel7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w5hxpel7z"/>`,
		"fallback": "solar:document-medicine-outline",
	});
}

export default Component;
