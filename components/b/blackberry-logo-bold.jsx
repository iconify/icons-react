import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcd4a1t7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcd4a1t7h"/>`,
		"fallback": "streamline-ultimate:blackberry-logo-bold",
	});
}

export default Component;
