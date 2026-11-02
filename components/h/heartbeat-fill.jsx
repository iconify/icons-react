import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3ip3z8db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3ip3z8db"/>`,
		"fallback": "mingcute:heartbeat-fill",
	});
}

export default Component;
