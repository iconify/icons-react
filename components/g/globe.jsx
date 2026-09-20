import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qedv1cb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qedv1cb8z"/>`,
		"fallback": "proicons:globe",
	});
}

export default Component;
