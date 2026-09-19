import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to2zydb0a.css';
import '../../css/w/w0zocplep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to2zydb0a"/><path class="w0zocplep"/>`,
		"fallback": "bx:bx-toggle-right",
	});
}

export default Component;
