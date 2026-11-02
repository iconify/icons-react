import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcr3n5mdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcr3n5mdm"/>`,
		"fallback": "mingcute:file-pen-fill",
	});
}

export default Component;
