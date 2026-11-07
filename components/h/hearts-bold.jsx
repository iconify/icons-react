import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_y09-bgq.css';
import '../../css/k/kxsg-jupr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_y09-bgq"/><path class="kxsg-jupr"/>`,
		"fallback": "solar:hearts-bold",
	});
}

export default Component;
