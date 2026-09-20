import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx3dfhm3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx3dfhm3q"/>`,
		"fallback": "token:gamma",
	});
}

export default Component;
