import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7171nbtp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7171nbtp"/>`,
		"fallback": "streamline:computer-connection-usb-cable-cables-cable-device-cord-computer-electronics-cords-usb",
	});
}

export default Component;
