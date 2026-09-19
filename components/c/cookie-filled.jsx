import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym1fg2b7s.css';
import '../../css/q/qmopwkg8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym1fg2b7s"/><path class="qmopwkg8b"/>`,
		"fallback": "boxicons:cookie-filled",
	});
}

export default Component;
