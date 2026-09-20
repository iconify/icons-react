import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkm-nia1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkm-nia1q"/>`,
		"fallback": "lineicons:cart-1",
	});
}

export default Component;
