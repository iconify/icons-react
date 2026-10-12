import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lm-obo21n.css';
import '../../css/q/qqd3c-b7h.css';
import '../../css/h/hc01h_81m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lm-obo21n"/><path class="qqd3c-b7h"/><path class="hc01h_81m"/></g>`,
		"fallback": "andrsrxn:file-check",
	});
}

export default Component;
