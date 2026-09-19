import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdlu0zubj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdlu0zubj"/>`,
		"fallback": "boxicons:bone-filled",
	});
}

export default Component;
