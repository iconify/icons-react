import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcta-bc5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcta-bc5w"/>`,
		"fallback": "mingcute:aiming-fill",
	});
}

export default Component;
