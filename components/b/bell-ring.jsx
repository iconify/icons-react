import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygui90b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygui90b_l"/>`,
		"fallback": "keyline-icons:bell-ring",
	});
}

export default Component;
