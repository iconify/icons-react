import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4f6-z6ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4f6-z6ya"/>`,
		"fallback": "mingcute:hammer-2-line",
	});
}

export default Component;
