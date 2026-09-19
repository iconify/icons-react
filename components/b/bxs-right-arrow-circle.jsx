import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg0pcrbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg0pcrbsn"/>`,
		"fallback": "bx:bxs-right-arrow-circle",
	});
}

export default Component;
