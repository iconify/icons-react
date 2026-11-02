import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um_6sorma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um_6sorma"/>`,
		"fallback": "mingcute:background-fill",
	});
}

export default Component;
