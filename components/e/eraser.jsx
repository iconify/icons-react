import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz2-0f1zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz2-0f1zi"/>`,
		"fallback": "fe:eraser",
	});
}

export default Component;
