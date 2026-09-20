import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux3s0mb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux3s0mb7v"/>`,
		"fallback": "keyline-icons:face-laugh",
	});
}

export default Component;
