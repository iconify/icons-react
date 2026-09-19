import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgzls91dj.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgzls91dj"/>`,
		"fallback": "whh:d-upper-case",
	});
}

export default Component;
