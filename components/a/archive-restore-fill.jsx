import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9uk0jdie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9uk0jdie"/>`,
		"fallback": "mingcute:archive-restore-fill",
	});
}

export default Component;
