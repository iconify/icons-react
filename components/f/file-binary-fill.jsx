import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gu8ix6b3e.css';
import '../../css/j/jvgu8xbdp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gu8ix6b3e"/><path class="jvgu8xbdp"/></g>`,
		"fallback": "bi:file-binary-fill",
	});
}

export default Component;
