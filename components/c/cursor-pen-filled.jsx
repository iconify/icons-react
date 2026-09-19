import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvv9i4bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvv9i4bhr"/>`,
		"fallback": "boxicons:cursor-pen-filled",
	});
}

export default Component;
