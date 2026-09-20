import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2m2jwb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2m2jwb2i"/>`,
		"fallback": "mingcute:bus-2-line",
	});
}

export default Component;
