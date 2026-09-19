import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3m55ehci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3m55ehci"/>`,
		"fallback": "iconoir:arrows-up-from-line",
	});
}

export default Component;
