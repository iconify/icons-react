import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z8j6ccc5g.css';
import '../../css/e/e1ulcrbja.css';
import '../../css/d/dgimva6lq.css';
import '../../css/l/lbxqy2bfr.css';
import '../../css/h/ht6mdpbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z8j6ccc5g"/><path class="e1ulcrbja"/><path class="dgimva6lq"/><path class="lbxqy2bfr"/><path class="ht6mdpbgs"/></g>`,
		"fallback": "solar:cup-hot-line-duotone",
	});
}

export default Component;
