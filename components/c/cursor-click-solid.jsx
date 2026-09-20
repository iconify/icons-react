import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y__k4ac1q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y__k4ac1q"/>`,
		"fallback": "streamline-flex:cursor-click-solid",
	});
}

export default Component;
