import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fugbhetlq.css';
import '../../css/z/zl8nfxbna.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fugbhetlq"/><path class="zl8nfxbna"/></g>`,
		"fallback": "bi:folder-minus",
	});
}

export default Component;
