import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arwizp_bx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arwizp_bx"/>`,
		"fallback": "mingcute:ear-off-fill",
	});
}

export default Component;
