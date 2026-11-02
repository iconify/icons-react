import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh268tzqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh268tzqj"/>`,
		"fallback": "mingcute:circle-arrow-out-up-right-line",
	});
}

export default Component;
