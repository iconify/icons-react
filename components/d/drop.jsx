import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlth1jb1q.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlth1jb1q"/>`,
		"fallback": "f7:drop",
	});
}

export default Component;
