import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uks-53bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uks-53bfj"/>`,
		"fallback": "mdi:inbox-arrow-down-outline",
	});
}

export default Component;
