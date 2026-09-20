import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3vu8rbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3vu8rbcb"/>`,
		"fallback": "mingcute:ethereum-line",
	});
}

export default Component;
