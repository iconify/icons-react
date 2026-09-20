import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ra-1bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ra-1bjl"/>`,
		"fallback": "mdi:arrow-u-right-bottom-bold",
	});
}

export default Component;
