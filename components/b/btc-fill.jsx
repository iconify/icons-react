import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1_2kycla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1_2kycla"/>`,
		"fallback": "ri:btc-fill",
	});
}

export default Component;
