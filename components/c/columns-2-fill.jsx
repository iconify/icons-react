import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnw_gdc9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnw_gdc9b"/>`,
		"fallback": "mingcute:columns-2-fill",
	});
}

export default Component;
