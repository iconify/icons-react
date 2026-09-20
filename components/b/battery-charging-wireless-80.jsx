import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbs_lyb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbs_lyb5u"/>`,
		"fallback": "mdi:battery-charging-wireless-80",
	});
}

export default Component;
