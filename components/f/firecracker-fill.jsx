import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxk8ojvuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxk8ojvuu"/>`,
		"fallback": "mingcute:firecracker-fill",
	});
}

export default Component;
