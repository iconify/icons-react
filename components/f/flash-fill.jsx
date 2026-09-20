import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dal7ae8el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dal7ae8el"/>`,
		"fallback": "mingcute:flash-fill",
	});
}

export default Component;
