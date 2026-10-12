import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv_gds3rt.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/o/odybpvbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zv_gds3rt"/><path class="rs0wrok6f"/><path class="odybpvbhl"/></g>`,
		"fallback": "andrsrxn:cloud-drop",
	});
}

export default Component;
