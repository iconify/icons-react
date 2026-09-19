import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trhm6wb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trhm6wb1b"/>`,
		"fallback": "boxicons:dialpad-filled",
	});
}

export default Component;
