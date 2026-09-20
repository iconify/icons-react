import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0g8kwbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0g8kwbbl"/>`,
		"fallback": "ri:filter-off-fill",
	});
}

export default Component;
