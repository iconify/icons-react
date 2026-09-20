import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghj6zeexj.css';
import '../../css/i/i1rnhy3qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghj6zeexj"/><path class="i1rnhy3qh"/>`,
		"fallback": "streamline-ultimate:coin-purse-1-bold",
	});
}

export default Component;
