import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sglkbcbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sglkbcbsi"/>`,
		"fallback": "iconamoon:arrow-down-1-light",
	});
}

export default Component;
