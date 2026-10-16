import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6wbwjb8t.css';
import '../../css/l/l2frilr8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6wbwjb8t"/><path class="l2frilr8s"/>`,
		"fallback": "energy-icons:book-marked-48-bold",
	});
}

export default Component;
