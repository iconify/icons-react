import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k09yz1bnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k09yz1bnz"/>`,
		"fallback": "iconamoon:arrow-bottom-left-1-bold",
	});
}

export default Component;
