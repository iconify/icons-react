import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk7quib5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk7quib5k"/>`,
		"fallback": "mingcute:attachment-2-fill",
	});
}

export default Component;
