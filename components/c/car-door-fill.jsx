import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx58g5b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zx58g5b5e"/>`,
		"fallback": "mingcute:car-door-fill",
	});
}

export default Component;
