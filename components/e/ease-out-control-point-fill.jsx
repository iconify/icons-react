import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3-aeb-6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3-aeb-6p"/>`,
		"fallback": "mingcute:ease-out-control-point-fill",
	});
}

export default Component;
