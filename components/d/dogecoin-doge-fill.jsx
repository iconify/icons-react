import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u36f9db9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u36f9db9i"/>`,
		"fallback": "mingcute:dogecoin-doge-fill",
	});
}

export default Component;
