import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sim8i5tck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sim8i5tck"/>`,
		"fallback": "mingcute:ad-circle-line",
	});
}

export default Component;
