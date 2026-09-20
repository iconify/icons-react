import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk3e8abzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk3e8abzr"/>`,
		"fallback": "mingcute:house-line",
	});
}

export default Component;
