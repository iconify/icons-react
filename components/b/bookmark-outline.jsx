import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1rte6bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bookmark-outline"><path class="Vector i1rte6bvi" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:bookmark-outline",
	});
}

export default Component;
