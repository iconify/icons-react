import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8ved5nop.css';
import '../../css/s/s5d7qab8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8ved5nop"/><path class="s5d7qab8q"/>`,
		"fallback": "boxicons:file-star",
	});
}

export default Component;
