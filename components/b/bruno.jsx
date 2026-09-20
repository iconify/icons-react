import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyzb7jb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyzb7jb9w"/>`,
		"fallback": "thesvg-color:bruno",
	});
}

export default Component;
