import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy60gyb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy60gyb7n"/>`,
		"fallback": "mdi:clock-time-one-outline",
	});
}

export default Component;
