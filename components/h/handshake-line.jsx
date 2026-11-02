import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylkfh-8lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylkfh-8lw"/>`,
		"fallback": "mingcute:handshake-line",
	});
}

export default Component;
