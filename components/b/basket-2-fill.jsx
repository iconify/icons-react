import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tly86gwbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tly86gwbq"/>`,
		"fallback": "mingcute:basket-2-fill",
	});
}

export default Component;
