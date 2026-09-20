import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwm-ibb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwm-ibb5y"/>`,
		"fallback": "mdi:augmented-reality",
	});
}

export default Component;
