import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7sufsb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7sufsb7r"/>`,
		"fallback": "mdi:battery-charging-50",
	});
}

export default Component;
