import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpx2bv8xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpx2bv8xo"/>`,
		"fallback": "mingcute:columns-4-line",
	});
}

export default Component;
