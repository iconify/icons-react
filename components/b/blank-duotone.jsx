import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlif8lbav.css';
import '../../css/f/f72_8xqoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlif8lbav"/><path class="f72_8xqoe"/>`,
		"fallback": "lets-icons:blank-duotone",
	});
}

export default Component;
