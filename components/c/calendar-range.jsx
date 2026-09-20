import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yif2k3mfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yif2k3mfa"/>`,
		"fallback": "mdi:calendar-range",
	});
}

export default Component;
