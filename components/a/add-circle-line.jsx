import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tloiup0ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tloiup0ky"/>`,
		"fallback": "mingcute:add-circle-line",
	});
}

export default Component;
