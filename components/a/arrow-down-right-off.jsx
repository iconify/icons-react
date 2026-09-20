import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bc4no_b3l.css';
import '../../css/a/ahiimqb-d.css';
import '../../css/v/v265wlblk.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="bc4no_b3l"/><path class="ahiimqb-d"/><path class="v265wlblk"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:arrow-down-right-off",
	});
}

export default Component;
