import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za_4knwjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za_4knwjj"/>`,
		"fallback": "mingcute:bed-single-fill",
	});
}

export default Component;
