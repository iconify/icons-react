import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc0ixizio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc0ixizio"/>`,
		"fallback": "mingcute:add-circle-dash-fill",
	});
}

export default Component;
