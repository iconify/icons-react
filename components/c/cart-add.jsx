import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t12f6_cmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t12f6_cmu"/>`,
		"fallback": "pixel:cart-add",
	});
}

export default Component;
