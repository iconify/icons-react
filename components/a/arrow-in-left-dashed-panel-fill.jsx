import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn7d8btfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn7d8btfu"/>`,
		"fallback": "keyline-icons:arrow-in-left-dashed-panel-fill",
	});
}

export default Component;
