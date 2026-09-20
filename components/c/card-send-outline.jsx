import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esp89b3wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="esp89b3wi"/>`,
		"fallback": "solar:card-send-outline",
	});
}

export default Component;
