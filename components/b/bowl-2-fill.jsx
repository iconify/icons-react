import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg3rie7kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg3rie7kp"/>`,
		"fallback": "mingcute:bowl-2-fill",
	});
}

export default Component;
