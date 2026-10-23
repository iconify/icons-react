import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m42t7ebcs.css';
import '../../css/z/zriv5vxlj.css';
import '../../css/w/wh263_jsa.css';
import '../../css/m/mgtt24brm.css';
import '../../css/e/ef6cwgk0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m42t7ebcs"/><path class="zriv5vxlj"/><path class="wh263_jsa"/><path class="mgtt24brm"/><path class="ef6cwgk0g"/></g>`,
		"fallback": "andrsrxn:beach",
	});
}

export default Component;
