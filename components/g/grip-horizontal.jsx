import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv6xn7b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv6xn7b0y"/>`,
		"fallback": "hugeicons:grip-horizontal",
	});
}

export default Component;
