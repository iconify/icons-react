import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdp-fub5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdp-fub5u"/>`,
		"fallback": "mdi:cloud-cancel-outline",
	});
}

export default Component;
