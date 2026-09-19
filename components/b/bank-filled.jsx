import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tco8mq__i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tco8mq__i"/>`,
		"fallback": "boxicons:bank-filled",
	});
}

export default Component;
