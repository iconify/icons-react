import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfzx9u8oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfzx9u8oz"/>`,
		"fallback": "solar:arrow-left-down-broken",
	});
}

export default Component;
