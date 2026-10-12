import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qamjn039j.css';
import '../../css/q/qtmq76bec.css';
import '../../css/c/c2in3pbsd.css';
import '../../css/m/mpsfy0-cd.css';
import '../../css/z/zzyojoblq.css';
import '../../css/l/lyufebchh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qamjn039j"/><circle class="qtmq76bec"/><path class="c2in3pbsd"/><rect class="mpsfy0-cd"/><rect class="zzyojoblq"/><path class="lyufebchh"/></g>`,
		"fallback": "andrsrxn:alarm-pause",
	});
}

export default Component;
