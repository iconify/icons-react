import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnf9n1bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nnf9n1bec"/>`,
		"fallback": "solar:camera-square-bold",
	});
}

export default Component;
