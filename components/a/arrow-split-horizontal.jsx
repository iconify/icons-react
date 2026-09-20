import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntdsf7bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntdsf7bwi"/>`,
		"fallback": "mdi:arrow-split-horizontal",
	});
}

export default Component;
