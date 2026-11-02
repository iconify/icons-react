import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr1435t9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr1435t9d"/>`,
		"fallback": "mingcute:bed-2-fill",
	});
}

export default Component;
