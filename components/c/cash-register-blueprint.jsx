import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jtg1xwblt.css';
import '../../css/k/kem-d_31q.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/a/azgtk1fkp.css';
import '../../css/q/quw2ubcxm.css';
import '../../css/r/ry8ytjbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jtg1xwblt wm-deco"/><path class="kem-d_31q wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="azgtk1fkp wm-k"/><path class="quw2ubcxm wm-a"/><path class="ry8ytjbib wm-k"/></g>`,
		"fallback": "withicons:cash-register-blueprint",
	});
}

export default Component;
