import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6wbwjb8t.css';
import '../../css/x/xxkd03eis.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6wbwjb8t"/><path class="xxkd03eis"/>`,
		"fallback": "energy-icons:book-48-bold",
	});
}

export default Component;
