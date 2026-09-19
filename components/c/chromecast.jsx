import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by7cvhk5q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by7cvhk5q"/>`,
		"fallback": "fa7-brands:chromecast",
	});
}

export default Component;
