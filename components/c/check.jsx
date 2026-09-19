import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh4o6tbsq.css';

const viewBox = {"width":768,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh4o6tbsq"/>`,
		"fallback": "ls:check",
	});
}

export default Component;
