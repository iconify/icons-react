import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro-1ks86k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro-1ks86k"/>`,
		"fallback": "mingcute:announcement-line",
	});
}

export default Component;
