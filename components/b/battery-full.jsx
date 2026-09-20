import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pzauvpb_u.css';
import '../../css/e/eepz6tbhj.css';
import '../../css/l/lq2ydebmf.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="pzauvpb_u"/><path class="eepz6tbhj"/><path class="lq2ydebmf"/></g>`,
		"fallback": "system-uicons:battery-full",
	});
}

export default Component;
