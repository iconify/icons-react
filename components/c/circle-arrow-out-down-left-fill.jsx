import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m39rcgbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m39rcgbnl"/>`,
		"fallback": "mingcute:circle-arrow-out-down-left-fill",
	});
}

export default Component;
