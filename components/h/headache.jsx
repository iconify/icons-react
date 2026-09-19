import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcj0oe52h.css';
import '../../css/m/mn2im8yde.css';
import '../../css/m/mcxp28brc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vcj0oe52h"/><path clip-rule="evenodd" class="mn2im8yde"/><path class="mcxp28brc"/></g>`,
		"fallback": "healthicons:headache",
	});
}

export default Component;
