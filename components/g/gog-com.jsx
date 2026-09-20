import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/febz36opq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="febz36opq"/>`,
		"fallback": "mdi:gog-com",
	});
}

export default Component;
