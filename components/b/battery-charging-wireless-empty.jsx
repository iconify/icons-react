import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8f6byc7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8f6byc7i"/>`,
		"fallback": "mdi:battery-charging-wireless-empty",
	});
}

export default Component;
