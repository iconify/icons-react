import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by22ydp5s.css';
import '../../css/j/j7a0fv5du.css';
import '../../css/e/el9y-0crz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by22ydp5s"/><path class="j7a0fv5du"/><path class="el9y-0crz"/>`,
		"fallback": "solar:folder-tree-bold",
	});
}

export default Component;
