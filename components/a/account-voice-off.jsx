import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbkvt_4lb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbkvt_4lb"/>`,
		"fallback": "mdi:account-voice-off",
	});
}

export default Component;
