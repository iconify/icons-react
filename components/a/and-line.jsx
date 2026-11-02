import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtk7g9bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtk7g9bro"/>`,
		"fallback": "mingcute:and-line",
	});
}

export default Component;
