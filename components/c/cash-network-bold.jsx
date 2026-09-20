import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wokb92bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wokb92bqr"/>`,
		"fallback": "streamline-ultimate:cash-network-bold",
	});
}

export default Component;
