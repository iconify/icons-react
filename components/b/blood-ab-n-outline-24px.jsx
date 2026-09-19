import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r50ruyp5z.css';
import '../../css/u/ua0wb2e8z.css';
import '../../css/q/qack6wv-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r50ruyp5z"/><path clip-rule="evenodd" class="ua0wb2e8z"/><path class="qack6wv-z"/></g>`,
		"fallback": "healthicons:blood-ab-n-outline-24px",
	});
}

export default Component;
