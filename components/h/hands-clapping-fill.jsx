import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8p_mibin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8p_mibin"/>`,
		"fallback": "mingcute:hands-clapping-fill",
	});
}

export default Component;
