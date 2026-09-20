import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tykd_mbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tykd_mbxe"/>`,
		"fallback": "mdi:cash-usd-outline",
	});
}

export default Component;
