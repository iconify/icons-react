import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7ggnqb5n.css';
import '../../css/n/nuxe1q7gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k7ggnqb5n"/><path class="nuxe1q7gx"/>`,
		"fallback": "lets-icons:filter-alt-duotone-line",
	});
}

export default Component;
