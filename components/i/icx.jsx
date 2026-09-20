import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtkn67b0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtkn67b0j"/>`,
		"fallback": "token:icx",
	});
}

export default Component;
