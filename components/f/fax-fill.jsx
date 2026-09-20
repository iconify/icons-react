import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzowenl_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzowenl_o"/>`,
		"fallback": "mingcute:fax-fill",
	});
}

export default Component;
