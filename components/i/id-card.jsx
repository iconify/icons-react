import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7xkddbwv.css';
import '../../css/n/nng5iyb4r.css';
import '../../css/e/ewh1o9b7q.css';
import '../../css/q/qfv9f2nln.css';
import '../../css/t/tn2tgeiqu.css';
import '../../css/j/jm2f1rbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="l7xkddbwv wm-shadow"/><path class="nng5iyb4r"/><path class="ewh1o9b7q"/><path class="qfv9f2nln"/><path class="tn2tgeiqu wm-shine"/><path class="jm2f1rbcj wm-deco"/></g>`,
		"fallback": "withicons-sticker:id-card",
	});
}

export default Component;
