import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-4jvccaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-4jvccaa"/>`,
		"fallback": "mingcute:hexagon-fill",
	});
}

export default Component;
