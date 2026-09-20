import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nwfps6kqr.css';
import '../../css/u/uzr9r6dce.css';
import '../../css/p/pgxuijb2o.css';
import '../../css/x/x9nhjgblq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nwfps6kqr"/><path clip-rule="evenodd" class="uzr9r6dce"/><path class="pgxuijb2o"/><path class="x9nhjgblq"/></g>`,
		"fallback": "pepicons-pencil:controller",
	});
}

export default Component;
