import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hl0mleb2v.css';
import '../../css/q/qh75jcq5x.css';
import '../../css/x/x_2xbjk-i.css';
import '../../css/b/bqpt78r5r.css';
import '../../css/j/j_6w1fbre.css';
import '../../css/x/xjwylvpfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hl0mleb2v"/><path class="qh75jcq5x"/><path class="x_2xbjk-i"/><path class="bqpt78r5r"/><path class="j_6w1fbre"/><path class="xjwylvpfw"/></g>`,
		"fallback": "solar:dropper-2-line-duotone",
	});
}

export default Component;
