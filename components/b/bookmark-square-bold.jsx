import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/crp3fxokg.css';
import '../../css/s/s3ri06bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="crp3fxokg"/><path class="s3ri06bxg"/></g>`,
		"fallback": "solar:bookmark-square-bold",
	});
}

export default Component;
