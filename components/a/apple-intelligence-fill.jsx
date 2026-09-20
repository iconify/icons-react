import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flg4ghb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flg4ghb6l"/>`,
		"fallback": "mingcute:apple-intelligence-fill",
	});
}

export default Component;
