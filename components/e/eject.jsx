import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxu2bz8el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxu2bz8el"/>`,
		"fallback": "mynaui:eject",
	});
}

export default Component;
