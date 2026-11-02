import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoc2j8l5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoc2j8l5k"/>`,
		"fallback": "mingcute:globe-off-fill",
	});
}

export default Component;
