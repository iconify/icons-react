import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifp5jlboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifp5jlboj"/>`,
		"fallback": "mingcute:american-express-line",
	});
}

export default Component;
