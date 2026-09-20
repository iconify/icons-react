import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3g1pccrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3g1pccrm"/>`,
		"fallback": "mdi:book-refresh",
	});
}

export default Component;
