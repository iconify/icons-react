import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmpdzvbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmpdzvbxy"/>`,
		"fallback": "uil:arrows-resize-h",
	});
}

export default Component;
