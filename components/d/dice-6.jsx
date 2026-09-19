import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pp-hmcb4o.css';
import '../../css/n/nue6apeeu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pp-hmcb4o"/><path class="nue6apeeu"/></g>`,
		"fallback": "bi:dice-6",
	});
}

export default Component;
