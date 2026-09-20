import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu71tbcjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu71tbcjl"/>`,
		"fallback": "mdi:battery-charging-wireless-40",
	});
}

export default Component;
