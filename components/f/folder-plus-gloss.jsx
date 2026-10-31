import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-ob1yb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-ob1yb9l"/>`,
		"fallback": "withicons:folder-plus-gloss",
	});
}

export default Component;
