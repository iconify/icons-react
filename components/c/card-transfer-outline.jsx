import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttiz4u36y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ttiz4u36y"/>`,
		"fallback": "solar:card-transfer-outline",
	});
}

export default Component;
