import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j62ez0b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j62ez0b2l"/>`,
		"fallback": "boxicons:cursor-add",
	});
}

export default Component;
