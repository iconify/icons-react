import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7jqg1bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7jqg1bwh"/>`,
		"fallback": "mingcute:hand-heart-line",
	});
}

export default Component;
