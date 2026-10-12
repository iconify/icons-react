import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z853qkrjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z853qkrjx"/>`,
		"fallback": "andrsrxn:cellular-network-edge",
	});
}

export default Component;
