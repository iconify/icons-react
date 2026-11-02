import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yze8-eekk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yze8-eekk"/>`,
		"fallback": "mingcute:globe-check-fill",
	});
}

export default Component;
