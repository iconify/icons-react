import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3clegbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3clegbvf"/>`,
		"fallback": "streamline-ultimate:hand-drag-bold",
	});
}

export default Component;
