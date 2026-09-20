import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcuou08cq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcuou08cq"/>`,
		"fallback": "mdi:box-lock-outline",
	});
}

export default Component;
