import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wdla-kb1l.css';
import '../../css/n/n5nvdgbxy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wdla-kb1l"/><path class="n5nvdgbxy"/></g>`,
		"fallback": "bi:file-zip",
	});
}

export default Component;
