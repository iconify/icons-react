import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6u2040-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6u2040-n"/>`,
		"fallback": "mingcute:diameter-line",
	});
}

export default Component;
