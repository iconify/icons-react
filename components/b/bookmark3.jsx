import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ap1d5ab4f.css';
import '../../css/r/rr4yu8s3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ap1d5ab4f"/><path clip-rule="evenodd" class="rr4yu8s3q"/></g>`,
		"fallback": "reicon:bookmark3",
	});
}

export default Component;
