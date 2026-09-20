import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rck6_bd7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rck6_bd7r"/>`,
		"fallback": "solar:bolt-broken",
	});
}

export default Component;
