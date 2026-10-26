import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sm89wjbmb.css';
import '../../css/l/l-5pmmbld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sm89wjbmb"/><path class="l-5pmmbld"/></g>`,
		"fallback": "healthicons:acupuncture-2-outline",
	});
}

export default Component;
