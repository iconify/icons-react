import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by0mu6bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by0mu6bun"/>`,
		"fallback": "withicons:grid-2x2-gloss",
	});
}

export default Component;
