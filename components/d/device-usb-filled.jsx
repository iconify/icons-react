import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqs2x_bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqs2x_bug"/>`,
		"fallback": "tabler:device-usb-filled",
	});
}

export default Component;
