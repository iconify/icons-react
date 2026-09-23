import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i8521mb4g.css';
import '../../css/y/y-k2685sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i8521mb4g"/><path class="y-k2685sx"/></g>`,
		"fallback": "keyline-icons:folder-sparkles",
	});
}

export default Component;
