import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec4st_xys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec4st_xys"/>`,
		"fallback": "mingcute:ethernet-port-fill",
	});
}

export default Component;
