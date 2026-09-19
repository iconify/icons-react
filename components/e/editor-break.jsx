import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq54d0bhf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq54d0bhf"/>`,
		"fallback": "dashicons:editor-break",
	});
}

export default Component;
