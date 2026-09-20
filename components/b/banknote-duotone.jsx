import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rk_xybcdo.css';
import '../../css/r/rnmmgzb7q.css';
import '../../css/d/dbth34zxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rk_xybcdo"/><path class="rnmmgzb7q"/><path clip-rule="evenodd" class="dbth34zxp"/></g>`,
		"fallback": "reicon:banknote-duotone",
	});
}

export default Component;
