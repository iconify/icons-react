import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hykn4h-1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hykn4h-1n"/>`,
		"fallback": "mingcute:document-2-fill",
	});
}

export default Component;
