import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_c4e9r8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_c4e9r8w"/>`,
		"fallback": "mingcute:barrel-2-line",
	});
}

export default Component;
