import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4rkire3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4rkire3y"/>`,
		"fallback": "mingcute:cellphone-2-ai-fill",
	});
}

export default Component;
