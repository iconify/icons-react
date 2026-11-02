import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njne1h_oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njne1h_oo"/>`,
		"fallback": "mingcute:align-justify-line",
	});
}

export default Component;
