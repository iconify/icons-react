import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhyy_4bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhyy_4bdf"/>`,
		"fallback": "mingcute:crystal-ball-fill",
	});
}

export default Component;
