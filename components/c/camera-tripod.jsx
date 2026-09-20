import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c_s47-b6v.css';
import '../../css/u/uqydko1ud.css';
import '../../css/g/gw93tkjcm.css';
import '../../css/r/ru72i24ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c_s47-b6v"/><path class="uqydko1ud"/><path class="gw93tkjcm"/><path class="ru72i24ec"/></g>`,
		"fallback": "streamline-freehand:camera-tripod",
	});
}

export default Component;
