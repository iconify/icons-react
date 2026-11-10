import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygk41b0zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygk41b0zg"/>`,
		"fallback": "andrsrxn:8k",
	});
}

export default Component;
