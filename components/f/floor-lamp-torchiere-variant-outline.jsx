import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcd1rsl6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcd1rsl6b"/>`,
		"fallback": "mdi:floor-lamp-torchiere-variant-outline",
	});
}

export default Component;
