import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0a8gi0lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0a8gi0lh"/>`,
		"fallback": "bxs:cube-alt",
	});
}

export default Component;
