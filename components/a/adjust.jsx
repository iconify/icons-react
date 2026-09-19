import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl87nh5pk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl87nh5pk"/>`,
		"fallback": "whh:adjust",
	});
}

export default Component;
