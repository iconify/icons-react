import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeid6ab-q.css';

const viewBox = {"width":667,"height":672};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeid6ab-q"/>`,
		"fallback": "ls:eraser",
	});
}

export default Component;
