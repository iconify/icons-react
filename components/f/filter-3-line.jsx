import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pffl33b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pffl33b1v"/>`,
		"fallback": "ri:filter-3-line",
	});
}

export default Component;
