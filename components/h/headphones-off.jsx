import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n235_xbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n235_xbht"/>`,
		"fallback": "keyline-icons:headphones-off",
	});
}

export default Component;
