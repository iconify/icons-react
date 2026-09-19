import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbo6mfjnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbo6mfjnh"/>`,
		"fallback": "fe:download",
	});
}

export default Component;
