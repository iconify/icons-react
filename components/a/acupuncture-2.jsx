import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yy16ft5rm.css';
import '../../css/m/m_3jpfb9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yy16ft5rm"/><path class="m_3jpfb9x"/></g>`,
		"fallback": "healthicons:acupuncture-2",
	});
}

export default Component;
