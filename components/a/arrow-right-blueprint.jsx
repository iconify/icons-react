import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w2meg0bwg.css';
import '../../css/g/g2znv1bsm.css';
import '../../css/z/zxf-rykue.css';
import '../../css/r/rfbqls1zy.css';
import '../../css/r/rwrp5ib1l.css';
import '../../css/f/f4zz7ocbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="w2meg0bwg wm-deco"/><path class="g2znv1bsm wm-deco"/><path class="wm-k zxf-rykue"/><path class="rfbqls1zy wm-a"/><path class="rwrp5ib1l wm-k"/><path class="f4zz7ocbr wm-a"/></g>`,
		"fallback": "withicons:arrow-right-blueprint",
	});
}

export default Component;
