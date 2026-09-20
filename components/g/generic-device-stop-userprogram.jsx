import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wstt5lble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wstt5lble"/>`,
		"fallback": "ix:generic-device-stop-userprogram",
	});
}

export default Component;
