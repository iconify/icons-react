import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrgvmue1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrgvmue1y"/>`,
		"fallback": "mdi:battery-charging-wireless-full",
	});
}

export default Component;
