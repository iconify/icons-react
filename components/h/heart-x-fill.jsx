import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq53yeblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq53yeblb"/>`,
		"fallback": "mingcute:heart-x-fill",
	});
}

export default Component;
