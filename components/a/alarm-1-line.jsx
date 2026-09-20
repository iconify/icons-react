import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxou2p47l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxou2p47l"/>`,
		"fallback": "mingcute:alarm-1-line",
	});
}

export default Component;
