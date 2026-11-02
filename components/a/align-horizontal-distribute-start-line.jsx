import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp35fxpuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp35fxpuu"/>`,
		"fallback": "mingcute:align-horizontal-distribute-start-line",
	});
}

export default Component;
