import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-1--_lvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-1--_lvh"/>`,
		"fallback": "mdi:clock-out",
	});
}

export default Component;
