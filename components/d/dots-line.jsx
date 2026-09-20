import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t921sfb1a.css';
import '../../css/g/gh6kuqeme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t921sfb1a"/><path class="gh6kuqeme"/>`,
		"fallback": "mingcute:dots-line",
	});
}

export default Component;
