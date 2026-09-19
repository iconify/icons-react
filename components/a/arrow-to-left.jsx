import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awn-39bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awn-39bfj"/>`,
		"fallback": "bx:arrow-to-left",
	});
}

export default Component;
