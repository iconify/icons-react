import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaqzw85bx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaqzw85bx"/>`,
		"fallback": "griddy-icons:git",
	});
}

export default Component;
