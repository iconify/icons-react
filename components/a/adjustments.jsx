import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2hwl6bre.css';
import '../../css/d/dz_dnxb8k.css';

const viewBox = {"width":33,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w2hwl6bre"/><path class="dz_dnxb8k"/></g>`,
		"fallback": "et:adjustments",
	});
}

export default Component;
