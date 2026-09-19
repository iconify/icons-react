import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyj01ccef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyj01ccef"/>`,
		"fallback": "boxicons:eye-closed-filled",
	});
}

export default Component;
