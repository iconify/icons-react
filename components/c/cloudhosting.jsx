import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfo6qggyx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfo6qggyx"/>`,
		"fallback": "whh:cloudhosting",
	});
}

export default Component;
