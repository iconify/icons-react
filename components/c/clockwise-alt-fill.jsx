import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edr4xvbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edr4xvbmk"/>`,
		"fallback": "mingcute:clockwise-alt-fill",
	});
}

export default Component;
