import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/buceazbhx.css';
import '../../css/a/ajcoq6bhl.css';
import '../../css/x/x_xarmbrq.css';
import '../../css/z/zuqh_gv5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="buceazbhx"/><path class="ajcoq6bhl"/><path class="x_xarmbrq"/><path clip-rule="evenodd" class="zuqh_gv5l"/></g>`,
		"fallback": "solar:download-twice-square-outline",
	});
}

export default Component;
