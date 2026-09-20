import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyb_fy_my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyb_fy_my"/>`,
		"fallback": "mdi:google-wallet",
	});
}

export default Component;
