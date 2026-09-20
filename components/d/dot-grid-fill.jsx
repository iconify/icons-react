import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov_ok3q0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov_ok3q0l"/>`,
		"fallback": "mingcute:dot-grid-fill",
	});
}

export default Component;
