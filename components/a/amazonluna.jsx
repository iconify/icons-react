import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydlfnzits.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydlfnzits"/>`,
		"fallback": "simple-icons:amazonluna",
	});
}

export default Component;
