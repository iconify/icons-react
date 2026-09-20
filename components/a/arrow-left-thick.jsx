import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktesybb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktesybb6f"/>`,
		"fallback": "mdi:arrow-left-thick",
	});
}

export default Component;
