import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok65zv8cj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ok65zv8cj"/>`,
		"fallback": "sidekickicons:bookmark-check-20-solid",
	});
}

export default Component;
