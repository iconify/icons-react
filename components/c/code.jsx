import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwzh4kbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwzh4kbgn"/>`,
		"fallback": "proicons:code",
	});
}

export default Component;
