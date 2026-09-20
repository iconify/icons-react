import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnd1_cdki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnd1_cdki"/>`,
		"fallback": "mdi:battery-charging-wireless-50",
	});
}

export default Component;
