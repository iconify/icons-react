import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfj7c24mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfj7c24mx"/>`,
		"fallback": "mingcute:folder-3-fill",
	});
}

export default Component;
