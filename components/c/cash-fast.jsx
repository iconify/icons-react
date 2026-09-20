import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smj6sg1pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smj6sg1pq"/>`,
		"fallback": "mdi:cash-fast",
	});
}

export default Component;
