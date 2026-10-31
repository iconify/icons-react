import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbrlyc_hf.css';
import '../../css/g/gwe6u7bez.css';
import '../../css/d/dptutdbjq.css';
import '../../css/o/ojaixmb3c.css';
import '../../css/u/ud1vhdzlb.css';
import '../../css/t/t67v9_kbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fbrlyc_hf wm-shadow"/><path class="gwe6u7bez wm-k"/><path class="dptutdbjq wm-k"/><path class="ojaixmb3c wm-k"/><path class="ud1vhdzlb wm-k"/><path class="t67v9_kbk wm-shine"/></g>`,
		"fallback": "withicons-coquette:command",
	});
}

export default Component;
