import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5l0ophas.css';
import '../../css/l/le-2qlo8j.css';
import '../../css/a/aq_hwzb3g.css';
import '../../css/w/wbv-tibxs.css';
import '../../css/b/bd5n0i_hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j5l0ophas"/><path class="le-2qlo8j"/><circle class="aq_hwzb3g"/><circle class="wbv-tibxs"/><path class="bd5n0i_hu"/></g>`,
		"fallback": "andrsrxn:forklift",
	});
}

export default Component;
