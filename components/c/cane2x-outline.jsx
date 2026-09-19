import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w9wpg9cgy.css';
import '../../css/x/xyvolmu6b.css';
import '../../css/n/nnw93lbbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w9wpg9cgy"/><path class="xyvolmu6b"/><path clip-rule="evenodd" class="nnw93lbbj"/></g>`,
		"fallback": "healthicons:cane2x-outline",
	});
}

export default Component;
