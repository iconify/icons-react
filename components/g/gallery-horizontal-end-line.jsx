import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vso738k7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vso738k7j"/>`,
		"fallback": "mingcute:gallery-horizontal-end-line",
	});
}

export default Component;
