import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph-0pdbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph-0pdbbe"/>`,
		"fallback": "mingcute:git-graph-fill",
	});
}

export default Component;
