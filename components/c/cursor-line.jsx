import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n53gf5b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n53gf5b-k"/>`,
		"fallback": "mingcute:cursor-line",
	});
}

export default Component;
