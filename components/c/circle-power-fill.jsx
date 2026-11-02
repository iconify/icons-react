import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx6e3qbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx6e3qbzk"/>`,
		"fallback": "mingcute:circle-power-fill",
	});
}

export default Component;
