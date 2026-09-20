import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdtld8bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdtld8bcn"/>`,
		"fallback": "ri:battery-low-fill",
	});
}

export default Component;
