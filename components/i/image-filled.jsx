import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7t3-hb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7t3-hb6h"/>`,
		"fallback": "boxicons:image-filled",
	});
}

export default Component;
