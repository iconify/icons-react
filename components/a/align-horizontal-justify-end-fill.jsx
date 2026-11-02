import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpkmadslo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpkmadslo"/>`,
		"fallback": "mingcute:align-horizontal-justify-end-fill",
	});
}

export default Component;
