import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffq2y69hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffq2y69hk"/>`,
		"fallback": "sidekickicons:chevron-down-up",
	});
}

export default Component;
