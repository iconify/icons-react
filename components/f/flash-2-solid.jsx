import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5ydx-euj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5ydx-euj"/>`,
		"fallback": "streamline:flash-2-solid",
	});
}

export default Component;
