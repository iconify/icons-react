import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b70adqb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b70adqb8e"/>`,
		"fallback": "stash:headphones",
	});
}

export default Component;
