import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfr3wiw7h.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfr3wiw7h"/>`,
		"fallback": "whh:braillefour",
	});
}

export default Component;
