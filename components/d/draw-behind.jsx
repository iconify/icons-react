import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_j79-k8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_j79-k8o"/>`,
		"fallback": "boxicons:draw-behind",
	});
}

export default Component;
