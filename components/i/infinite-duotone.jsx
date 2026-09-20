import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/px29r6bpe.css';
import '../../css/v/vyx4t-bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="px29r6bpe"/><path class="vyx4t-bqy"/></g>`,
		"fallback": "reicon:infinite-duotone",
	});
}

export default Component;
