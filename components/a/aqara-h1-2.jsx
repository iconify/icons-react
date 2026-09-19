import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nre9ogsov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nre9ogsov"/>`,
		"fallback": "cbi:aqara-h1-2",
	});
}

export default Component;
