import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah6_ogb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah6_ogb4k"/>`,
		"fallback": "mingcute:coin-2-fill",
	});
}

export default Component;
