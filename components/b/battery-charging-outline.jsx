import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh4z9dqco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh4z9dqco"/>`,
		"fallback": "mdi:battery-charging-outline",
	});
}

export default Component;
