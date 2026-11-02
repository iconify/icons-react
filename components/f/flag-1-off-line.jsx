import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj4z4bhxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj4z4bhxp"/>`,
		"fallback": "mingcute:flag-1-off-line",
	});
}

export default Component;
