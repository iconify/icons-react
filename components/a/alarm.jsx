import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-h_2-j7x.css';
import '../../css/w/w6uhtwbdv.css';
import '../../css/g/gq4pcdcbf.css';
import '../../css/i/i-zxp8bjx.css';
import '../../css/c/ch2e_uvgw.css';
import '../../css/m/mx0a56sjt.css';
import '../../css/g/g4w_yt51q.css';
import '../../css/p/p5d6bms_b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i-h_2-j7x"/><path clip-rule="evenodd" class="w6uhtwbdv"/><path clip-rule="evenodd" class="gq4pcdcbf"/><path clip-rule="evenodd" class="i-zxp8bjx"/><path class="ch2e_uvgw"/><path clip-rule="evenodd" class="mx0a56sjt"/><path class="g4w_yt51q"/><path clip-rule="evenodd" class="p5d6bms_b"/></g>`,
		"fallback": "pepicons-print:alarm",
	});
}

export default Component;
