import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6_7a0zbx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6_7a0zbx"/>`,
		"fallback": "streamline:hang-up-2",
	});
}

export default Component;
