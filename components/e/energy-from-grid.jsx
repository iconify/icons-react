import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhf8m9a1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhf8m9a1b"/>`,
		"fallback": "mdi:energy-from-grid",
	});
}

export default Component;
