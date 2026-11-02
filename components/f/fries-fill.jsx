import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvd971b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvd971b4q"/>`,
		"fallback": "mingcute:fries-fill",
	});
}

export default Component;
