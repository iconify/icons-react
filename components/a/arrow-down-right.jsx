import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bc4no_b3l.css';
import '../../css/a/ahiimqb-d.css';
import '../../css/v/v265wlblk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bc4no_b3l"/><path class="ahiimqb-d"/><path class="v265wlblk"/></g>`,
		"fallback": "pepicons-pencil:arrow-down-right",
	});
}

export default Component;
