import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu604iz0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu604iz0n"/>`,
		"fallback": "solar:forward-2-broken",
	});
}

export default Component;
