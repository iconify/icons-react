import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_vy8db8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o_vy8db8y"/>`,
		"fallback": "mingcute:incognito-mode-fill",
	});
}

export default Component;
