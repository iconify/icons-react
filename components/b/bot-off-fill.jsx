import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r59-vnb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r59-vnb9j"/>`,
		"fallback": "mingcute:bot-off-fill",
	});
}

export default Component;
