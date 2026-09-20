import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmc1m3ixj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmc1m3ixj"/>`,
		"fallback": "lucide:gamepad-2",
	});
}

export default Component;
