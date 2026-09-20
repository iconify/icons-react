import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2e7ncbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2e7ncbpn"/>`,
		"fallback": "mingcute:earth-longitude-fill",
	});
}

export default Component;
