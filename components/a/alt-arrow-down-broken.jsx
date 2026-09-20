import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad4e4fb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad4e4fb6o"/>`,
		"fallback": "solar:alt-arrow-down-broken",
	});
}

export default Component;
