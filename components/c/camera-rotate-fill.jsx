import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq65rrbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq65rrbjc"/>`,
		"fallback": "mingcute:camera-rotate-fill",
	});
}

export default Component;
