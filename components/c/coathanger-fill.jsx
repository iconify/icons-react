import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxcpg12gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxcpg12gh"/>`,
		"fallback": "mingcute:coathanger-fill",
	});
}

export default Component;
