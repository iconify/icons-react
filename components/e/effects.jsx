import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/ds2r4k_eg.css';
import '../../css/n/nci-l2b9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ds2r4k_eg"/><path class="nci-l2b9l"/></g>`,
		"fallback": "icon-park:effects",
	});
}

export default Component;
