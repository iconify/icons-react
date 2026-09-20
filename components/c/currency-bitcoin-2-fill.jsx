import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-ulnd4tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-ulnd4tc"/>`,
		"fallback": "mingcute:currency-bitcoin-2-fill",
	});
}

export default Component;
