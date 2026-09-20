import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm1lafg_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm1lafg_n"/>`,
		"fallback": "mdi:arrow-top-right-bottom-left-bold",
	});
}

export default Component;
