import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g35rddiyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g35rddiyj"/>`,
		"fallback": "guidance:cleaning-room-2",
	});
}

export default Component;
