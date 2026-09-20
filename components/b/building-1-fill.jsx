import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8i0cbb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8i0cbb5m"/>`,
		"fallback": "mingcute:building-1-fill",
	});
}

export default Component;
