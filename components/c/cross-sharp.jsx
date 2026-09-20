import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf4wmccsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf4wmccsa"/>`,
		"fallback": "pixelarticons:cross-sharp",
	});
}

export default Component;
