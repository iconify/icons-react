import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxom9tmkx.css';
import '../../css/n/nkf5_lt8x.css';
import '../../css/h/h57i47-oq.css';
import '../../css/a/ayygo2qpx.css';
import '../../css/o/or6uoebrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bxom9tmkx"/><circle transform="rotate(90 12 12)" class="nkf5_lt8x"/><path class="h57i47-oq"/><circle class="ayygo2qpx"/><path class="or6uoebrl"/></g>`,
		"fallback": "andrsrxn:diameter",
	});
}

export default Component;
