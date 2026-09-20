import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le5mq_b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le5mq_b3l"/>`,
		"fallback": "lineicons:helicopter-2",
	});
}

export default Component;
