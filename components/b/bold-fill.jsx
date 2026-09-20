import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeyi83b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeyi83b_c"/>`,
		"fallback": "mingcute:bold-fill",
	});
}

export default Component;
