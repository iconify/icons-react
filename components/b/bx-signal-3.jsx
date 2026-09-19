import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqf5m3bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqf5m3bbu"/>`,
		"fallback": "bx:bx-signal-3",
	});
}

export default Component;
