import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tis7hb_9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tis7hb_9n"/>`,
		"fallback": "mdi:favorite-circle",
	});
}

export default Component;
