import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdz824bdr.css';
import '../../css/c/cgcf9vb8w.css';
import '../../css/j/jyz616zsr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pdz824bdr"/><path clip-rule="evenodd" class="cgcf9vb8w"/><path class="jyz616zsr"/></g>`,
		"fallback": "healthicons:community-meeting-outline",
	});
}

export default Component;
