import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjb7ndb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjb7ndb7c"/>`,
		"fallback": "mingcute:folder-git-2-fill",
	});
}

export default Component;
