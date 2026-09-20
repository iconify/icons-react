import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4xae4spt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4xae4spt"/>`,
		"fallback": "streamline-ultimate:arrow-thick-up-4-bold",
	});
}

export default Component;
