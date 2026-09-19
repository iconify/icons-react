import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nalfbrbnz.css';
import '../../css/p/p620f_0bx.css';
import '../../css/p/p5eipvbsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="nalfbrbnz"/><path class="p620f_0bx"/><path class="p5eipvbsq"/></g>`,
		"fallback": "icon-park-outline:fm",
	});
}

export default Component;
