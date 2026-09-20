import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_c9h_pwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_c9h_pwm"/>`,
		"fallback": "pixelarticons:clipboard-sharp",
	});
}

export default Component;
