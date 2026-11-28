import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uzpoxesfd.css';
import '../../css/z/z9hd4x8gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uzpoxesfd"/><path class="primary z9hd4x8gy"/></g>`,
		"fallback": "iconaut:gift-card-duotone",
	});
}

export default Component;
