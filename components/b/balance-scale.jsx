import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5_sp-b6q.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5_sp-b6q"/>`,
		"fallback": "fa-solid:balance-scale",
	});
}

export default Component;
