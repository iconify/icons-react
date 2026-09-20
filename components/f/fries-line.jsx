import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg6jq9bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg6jq9bhv"/>`,
		"fallback": "mingcute:fries-line",
	});
}

export default Component;
