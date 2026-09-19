import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-ygl7brj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-ygl7brj"/>`,
		"fallback": "famicons:chatbox-outline",
	});
}

export default Component;
