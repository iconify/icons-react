import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snt7ubc3n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snt7ubc3n"/>`,
		"fallback": "streamline:computer-battery-full-1-phone-mobile-charge-device-electricity-power-battery-full",
	});
}

export default Component;
