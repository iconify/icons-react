import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xas3exbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xas3exbwh"/>`,
		"fallback": "mingcute:bnb-fill",
	});
}

export default Component;
