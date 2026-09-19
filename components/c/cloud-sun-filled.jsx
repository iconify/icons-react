import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j25l8irtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j25l8irtz"/>`,
		"fallback": "boxicons:cloud-sun-filled",
	});
}

export default Component;
