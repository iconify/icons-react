import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muu7-ibcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muu7-ibcm"/>`,
		"fallback": "hugeicons:eclipse",
	});
}

export default Component;
