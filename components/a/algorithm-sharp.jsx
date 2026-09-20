import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ou408q7in.css';
import '../../css/d/d9nspmtjp.css';
import '../../css/o/oid1jwbgs.css';
import '../../css/r/r2z99h6tg.css';
import '../../css/w/wzzte3bod.css';
import '../../css/x/xv0zq8prd.css';
import '../../css/y/yapblp33s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ou408q7in"/><path class="d9nspmtjp"/><path class="oid1jwbgs"/><path class="r2z99h6tg"/><path class="wzzte3bod"/><path class="xv0zq8prd"/><path class="yapblp33s"/></g>`,
		"fallback": "pixelarticons:algorithm-sharp",
	});
}

export default Component;
