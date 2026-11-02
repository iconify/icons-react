import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw0nn0b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw0nn0b2y"/>`,
		"fallback": "mingcute:hospital-fill",
	});
}

export default Component;
