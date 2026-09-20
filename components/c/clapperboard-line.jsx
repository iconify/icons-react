import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w39b4_bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w39b4_bgr"/>`,
		"fallback": "mingcute:clapperboard-line",
	});
}

export default Component;
