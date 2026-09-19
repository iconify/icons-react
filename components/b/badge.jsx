import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zrmuv0u_x.css';
import '../../css/g/grh3rlutl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="zrmuv0u_x"/><path class="grh3rlutl"/></g>`,
		"fallback": "icon-park:badge",
	});
}

export default Component;
