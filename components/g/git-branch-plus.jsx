import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmzlr3bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmzlr3bpr"/>`,
		"fallback": "noviair:git-branch-plus",
	});
}

export default Component;
