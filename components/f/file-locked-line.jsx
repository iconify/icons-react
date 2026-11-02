import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g728b8bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g728b8bwm"/>`,
		"fallback": "mingcute:file-locked-line",
	});
}

export default Component;
