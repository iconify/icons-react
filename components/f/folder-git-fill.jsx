import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc9yfib9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc9yfib9o"/>`,
		"fallback": "mingcute:folder-git-fill",
	});
}

export default Component;
