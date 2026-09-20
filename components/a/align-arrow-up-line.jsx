import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dly37_bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dly37_bzm"/>`,
		"fallback": "mingcute:align-arrow-up-line",
	});
}

export default Component;
