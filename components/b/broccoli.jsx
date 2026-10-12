import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekevpmbzx.css';
import '../../css/h/he_ze3b7j.css';
import '../../css/e/e-6ug8bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ekevpmbzx"/><path class="he_ze3b7j"/><path class="e-6ug8bzk"/></g>`,
		"fallback": "andrsrxn:broccoli",
	});
}

export default Component;
