import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gknqecb6q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gknqecb6q"/>`,
		"fallback": "fluent-mdl2:context-menu",
	});
}

export default Component;
