import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbn03r-oh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbn03r-oh"/>`,
		"fallback": "streamline:computer-battery-low-1-phone-mobile-charge-device-electricity-power-battery-low",
	});
}

export default Component;
