import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpqaeib0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpqaeib0i"/>`,
		"fallback": "streamline-ultimate:gift-box-1-bold",
	});
}

export default Component;
