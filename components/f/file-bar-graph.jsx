import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nw028df8b.css';
import '../../css/t/tuiv5pbxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nw028df8b"/><path class="tuiv5pbxl"/></g>`,
		"fallback": "bi:file-bar-graph",
	});
}

export default Component;
