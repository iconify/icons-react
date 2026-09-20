import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl8ymybgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl8ymybgs"/>`,
		"fallback": "mingcute:arrow-up-circle-line",
	});
}

export default Component;
