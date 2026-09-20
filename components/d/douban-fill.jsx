import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn_xh9bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn_xh9bwl"/>`,
		"fallback": "ri:douban-fill",
	});
}

export default Component;
