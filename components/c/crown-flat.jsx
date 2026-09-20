import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzdpws-5o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jzdpws-5o"/>`,
		"fallback": "streamline-flex-color:crown-flat",
	});
}

export default Component;
