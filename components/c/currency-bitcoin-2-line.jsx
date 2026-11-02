import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhz-0n1hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhz-0n1hf"/>`,
		"fallback": "mingcute:currency-bitcoin-2-line",
	});
}

export default Component;
