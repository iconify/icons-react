import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n43lisbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n43lisbfd"/>`,
		"fallback": "mingcute:image-edit-line",
	});
}

export default Component;
