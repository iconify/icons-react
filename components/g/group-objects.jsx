import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-a__rbow.css';
import '../../css/l/lppl2sbhj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-a__rbow"/><path class="lppl2sbhj"/>`,
		"fallback": "carbon:group-objects",
	});
}

export default Component;
