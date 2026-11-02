import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqe43nhdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqe43nhdi"/>`,
		"fallback": "mingcute:body-fill",
	});
}

export default Component;
