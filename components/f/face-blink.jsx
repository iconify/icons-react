import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w55oivbfr.css';
import '../../css/z/ze92cpb2t.css';
import '../../css/b/b6rbyjbdp.css';
import '../../css/u/urgc7cc2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="w55oivbfr"/><circle transform="rotate(90 12 12)" class="ze92cpb2t"/><path class="b6rbyjbdp"/><path class="urgc7cc2g"/></g>`,
		"fallback": "andrsrxn:face-blink",
	});
}

export default Component;
