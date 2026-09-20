import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sb5c9986i.css';
import '../../css/w/wt5ai1srv.css';
import '../../css/t/twp126wdr.css';
import '../../css/c/cmm-1kbqi.css';
import '../../css/i/i66aqyp3z.css';
import '../../css/t/tkjj65bgw.css';
import '../../css/q/qmopq8bmx.css';
import '../../css/k/kihvnsbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sb5c9986i"/><path class="wt5ai1srv"/><path class="twp126wdr"/><path class="cmm-1kbqi"/><path class="i66aqyp3z"/><path class="tkjj65bgw"/><path class="qmopq8bmx"/><path class="kihvnsbbt"/></g>`,
		"fallback": "solar:calculator-bold-duotone",
	});
}

export default Component;
