import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxsc2h-na.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxsc2h-na"/>`,
		"fallback": "mingcute:distribute-spacing-vertical-fill",
	});
}

export default Component;
