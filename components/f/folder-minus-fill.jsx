import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go1mctbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go1mctbfw"/>`,
		"fallback": "mingcute:folder-minus-fill",
	});
}

export default Component;
