import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-1demrtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-1demrtf"/>`,
		"fallback": "guidance:hide-eye-crossbar",
	});
}

export default Component;
