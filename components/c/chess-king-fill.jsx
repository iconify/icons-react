import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq21djx9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq21djx9i"/>`,
		"fallback": "mingcute:chess-king-fill",
	});
}

export default Component;
