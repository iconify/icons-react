import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnr6rb09e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnr6rb09e"/>`,
		"fallback": "ci:building-04",
	});
}

export default Component;
