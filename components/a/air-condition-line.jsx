import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn4b8bcbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn4b8bcbe"/>`,
		"fallback": "mingcute:air-condition-line",
	});
}

export default Component;
