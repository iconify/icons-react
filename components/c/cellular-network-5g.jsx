import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbw9buaii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbw9buaii"/>`,
		"fallback": "andrsrxn:cellular-network-5g",
	});
}

export default Component;
