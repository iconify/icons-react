import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qok4bxvwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qok4bxvwe"/>`,
		"fallback": "mingcute:incognito-mode-fill",
	});
}

export default Component;
