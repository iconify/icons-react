import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwal4_mck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwal4_mck"/>`,
		"fallback": "hugeicons:align-vertical-space-around",
	});
}

export default Component;
