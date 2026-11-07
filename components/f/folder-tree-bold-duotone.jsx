import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn8j1cc6q.css';
import '../../css/b/by22ydp5s.css';
import '../../css/q/quxmn86ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn8j1cc6q"/><path class="by22ydp5s"/><path class="quxmn86ec"/>`,
		"fallback": "solar:folder-tree-bold-duotone",
	});
}

export default Component;
