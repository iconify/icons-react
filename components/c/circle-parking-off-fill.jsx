import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3i909bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3i909bwk"/>`,
		"fallback": "mingcute:circle-parking-off-fill",
	});
}

export default Component;
