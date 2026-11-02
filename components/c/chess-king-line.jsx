import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uapnf89jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uapnf89jn"/>`,
		"fallback": "mingcute:chess-king-line",
	});
}

export default Component;
