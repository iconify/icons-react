import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prv7dxb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prv7dxb2g"/>`,
		"fallback": "mingcute:flag-3-line",
	});
}

export default Component;
