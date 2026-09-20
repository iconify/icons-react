import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okd8awbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okd8awbwm"/>`,
		"fallback": "mdi:flash-off",
	});
}

export default Component;
