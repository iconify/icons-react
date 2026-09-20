import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phqe5zbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phqe5zbfi"/>`,
		"fallback": "mynaui:code-circle-solid",
	});
}

export default Component;
