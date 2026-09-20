import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoj-6vd9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xoj-6vd9w"/>`,
		"fallback": "mingcute:alert-octagon-fill",
	});
}

export default Component;
