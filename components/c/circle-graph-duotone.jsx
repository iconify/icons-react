import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/azu4dlb7q.css';
import '../../css/h/h60yxfbqg.css';
import '../../css/e/eur9_vb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="azu4dlb7q"/><path class="h60yxfbqg"/><path class="eur9_vb7j"/></g>`,
		"fallback": "reicon:circle-graph-duotone",
	});
}

export default Component;
