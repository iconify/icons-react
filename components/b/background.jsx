import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfp1htbpz.css';
import '../../css/p/p6s0jubwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfp1htbpz"/><path class="p6s0jubwj"/>`,
		"fallback": "boxicons:background",
	});
}

export default Component;
