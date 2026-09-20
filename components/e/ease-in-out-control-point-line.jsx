import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dera1ebbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dera1ebbd"/>`,
		"fallback": "mingcute:ease-in-out-control-point-line",
	});
}

export default Component;
