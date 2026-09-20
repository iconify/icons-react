import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5gtv3biq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5gtv3biq"/>`,
		"fallback": "mingcute:align-vertical-center-fill",
	});
}

export default Component;
