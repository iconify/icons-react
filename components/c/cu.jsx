import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qucckv81f.css';
import '../../css/t/t24nc4fyz.css';
import '../../css/t/t_n49dv1k.css';
import '../../css/m/m8w15ub4u.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qucckv81f"/><path class="t24nc4fyz"/><path class="t_n49dv1k"/><path class="m8w15ub4u"/></g>`,
		"fallback": "cif:cu",
	});
}

export default Component;
