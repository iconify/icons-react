import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdluwybfk.css';
import '../../css/m/mheepubkm.css';
import '../../css/z/zqqq62brb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xdluwybfk"/><path class="mheepubkm"/><path clip-rule="evenodd" class="zqqq62brb"/></g>`,
		"fallback": "healthicons:entry2x-outline",
	});
}

export default Component;
