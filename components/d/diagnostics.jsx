import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pajftwqsn.css';
import '../../css/s/s9c5dfbyd.css';
import '../../css/t/tny-dy4ya.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pajftwqsn"/><path clip-rule="evenodd" class="s9c5dfbyd"/><path clip-rule="evenodd" class="tny-dy4ya"/></g>`,
		"fallback": "healthicons:diagnostics",
	});
}

export default Component;
