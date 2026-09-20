import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usc8o6-bs.css';
import '../../css/r/rqhj3y1_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usc8o6-bs"/><path class="rqhj3y1_o"/>`,
		"fallback": "lineicons:burger-drink",
	});
}

export default Component;
