import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfyk8p-da.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfyk8p-da"/>`,
		"fallback": "mingcute:instagram-line",
	});
}

export default Component;
