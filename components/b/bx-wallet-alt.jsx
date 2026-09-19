import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3n-s8zjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3n-s8zjj"/>`,
		"fallback": "bx:bx-wallet-alt",
	});
}

export default Component;
