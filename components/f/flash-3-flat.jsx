import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgj5w-y0m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgj5w-y0m"/>`,
		"fallback": "streamline-color:flash-3-flat",
	});
}

export default Component;
