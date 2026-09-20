import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyez6_ixh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyez6_ixh"/>`,
		"fallback": "mingcute:hotkey-fill",
	});
}

export default Component;
