import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb4pugy0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb4pugy0w"/>`,
		"fallback": "griddy-icons:connectivity-alt",
	});
}

export default Component;
