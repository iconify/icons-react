import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqv21hmdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqv21hmdp"/>`,
		"fallback": "mdi:battery-charging-70",
	});
}

export default Component;
