import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdm2ylbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdm2ylbsa"/>`,
		"fallback": "mingcute:escalator-up-fill",
	});
}

export default Component;
