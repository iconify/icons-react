import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie8cyuwin.css';
import '../../css/l/lwph_1yqb.css';
import '../../css/r/rgylxr1_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ie8cyuwin"/><path class="lwph_1yqb"/><path class="rgylxr1_f"/></g>`,
		"fallback": "andrsrxn:currency-vnd-circle",
	});
}

export default Component;
