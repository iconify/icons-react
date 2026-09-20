import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo49cibud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo49cibud"/>`,
		"fallback": "keyline-icons:hourglass",
	});
}

export default Component;
