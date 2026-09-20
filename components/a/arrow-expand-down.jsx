import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpe_t7bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpe_t7bxn"/>`,
		"fallback": "mdi:arrow-expand-down",
	});
}

export default Component;
