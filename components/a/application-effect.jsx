import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t5o9c9b-b.css';
import '../../css/o/oypktcckz.css';
import '../../css/u/u46x23bvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="t5o9c9b-b"/><path class="oypktcckz"/><path class="u46x23bvr"/></g>`,
		"fallback": "icon-park:application-effect",
	});
}

export default Component;
