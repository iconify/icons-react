import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2j135ojx.css';
import '../../css/p/px1nb10lr.css';
import '../../css/l/lmmsrqb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a2j135ojx"/><path class="px1nb10lr"/><path class="lmmsrqb_q"/></g>`,
		"fallback": "streamline-freehand-color:earpods-charge",
	});
}

export default Component;
