import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6u7tw-2d.css';
import '../../css/b/by38gccqr.css';
import '../../css/y/y_-z-8r0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b j6u7tw-2d"/><path class="b by38gccqr"/><path class="b y_-z-8r0d"/>`,
		"fallback": "boxicons:camera-alt",
	});
}

export default Component;
