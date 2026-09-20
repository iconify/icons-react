import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqz_0b6fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqz_0b6fc"/>`,
		"fallback": "ri:arrow-up-fill",
	});
}

export default Component;
