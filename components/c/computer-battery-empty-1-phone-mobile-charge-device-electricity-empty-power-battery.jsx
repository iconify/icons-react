import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3qc8vbdk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3qc8vbdk"/>`,
		"fallback": "streamline:computer-battery-empty-1-phone-mobile-charge-device-electricity-empty-power-battery",
	});
}

export default Component;
