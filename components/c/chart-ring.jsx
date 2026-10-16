import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftnhr1gdn.css';
import '../../css/o/oobyxfbza.css';
import '../../css/q/q7hob6bqi.css';
import '../../css/a/as41gacte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 11.96 11.96)" class="ftnhr1gdn"/><path class="oobyxfbza"/><path class="q7hob6bqi"/><path class="as41gacte"/></g>`,
		"fallback": "andrsrxn:chart-ring",
	});
}

export default Component;
