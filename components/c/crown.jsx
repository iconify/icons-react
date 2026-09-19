import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/ha4-t3dbh.css';
import '../../css/m/mxq9-yw1e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ha4-t3dbh"/><path class="mxq9-yw1e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:crown",
	});
}

export default Component;
