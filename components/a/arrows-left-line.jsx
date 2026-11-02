import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr20ljxkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr20ljxkj"/>`,
		"fallback": "mingcute:arrows-left-line",
	});
}

export default Component;
