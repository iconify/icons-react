import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hje1fwb1w.css';
import '../../css/z/z88ljobbe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hje1fwb1w"/><path clip-rule="evenodd" class="z88ljobbe"/></g>`,
		"fallback": "healthicons:diabetes-measure",
	});
}

export default Component;
