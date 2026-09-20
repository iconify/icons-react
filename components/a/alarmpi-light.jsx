import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkr2q8ban.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkr2q8ban"/>`,
		"fallback": "selfhst:alarmpi-light",
	});
}

export default Component;
