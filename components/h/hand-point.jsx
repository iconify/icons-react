import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xyjtgccot.css';
import '../../css/c/ck3rq6bkb.css';
import '../../css/c/c63o3wabg.css';
import '../../css/x/x6e3mnbvk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g class="xyjtgccot"><path class="ck3rq6bkb"/><path class="c63o3wabg"/></g><path clip-rule="evenodd" class="x6e3mnbvk"/></g>`,
		"fallback": "pepicons-print:hand-point",
	});
}

export default Component;
