import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/capkmo5jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="capkmo5jn"/>`,
		"fallback": "solar:health-bold",
	});
}

export default Component;
