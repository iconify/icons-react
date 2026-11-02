import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj73_9b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj73_9b7g"/>`,
		"fallback": "mingcute:camera-2-fill",
	});
}

export default Component;
