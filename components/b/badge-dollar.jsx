import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7fgw7bls.css';
import '../../css/y/yua1kc2gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7fgw7bls"/><path class="yua1kc2gi"/>`,
		"fallback": "circum:badge-dollar",
	});
}

export default Component;
