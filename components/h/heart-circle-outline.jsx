import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdhxq_bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdhxq_bsu"/>`,
		"fallback": "mdi:heart-circle-outline",
	});
}

export default Component;
