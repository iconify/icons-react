import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd-9u1kxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd-9u1kxc"/>`,
		"fallback": "mingcute:align-arrow-down-fill",
	});
}

export default Component;
