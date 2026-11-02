import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok-qd1dri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok-qd1dri"/>`,
		"fallback": "mingcute:compass-3-fill",
	});
}

export default Component;
