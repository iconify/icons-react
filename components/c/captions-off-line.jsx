import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hng45_bfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hng45_bfe"/>`,
		"fallback": "mingcute:captions-off-line",
	});
}

export default Component;
