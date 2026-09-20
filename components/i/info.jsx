import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anjx8r53q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anjx8r53q"/>`,
		"fallback": "simple-line-icons:info",
	});
}

export default Component;
