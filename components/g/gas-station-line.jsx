import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbt65ccmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbt65ccmj"/>`,
		"fallback": "mingcute:gas-station-line",
	});
}

export default Component;
