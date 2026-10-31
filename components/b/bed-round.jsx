import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3q631rcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3q631rcp"/>`,
		"fallback": "coolicons:bed-round",
	});
}

export default Component;
