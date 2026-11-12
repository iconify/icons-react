import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s33ndsrce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s33ndsrce"/>`,
		"fallback": "selfhst:alarmpi-light",
	});
}

export default Component;
