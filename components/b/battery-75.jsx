import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pzauvpb_u.css';
import '../../css/c/c--u34hmg.css';
import '../../css/l/lq2ydebmf.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="pzauvpb_u"/><path class="c--u34hmg"/><path class="lq2ydebmf"/></g>`,
		"fallback": "system-uicons:battery-75",
	});
}

export default Component;
