import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3t__ccaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3t__ccaf"/>`,
		"fallback": "mingcute:bread-fill",
	});
}

export default Component;
