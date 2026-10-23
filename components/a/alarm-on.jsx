import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2yysvd-n.css';
import '../../css/b/bj96j6xnf.css';
import '../../css/p/p7lf1orge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="z2yysvd-n"/><circle class="bj96j6xnf"/><path class="p7lf1orge"/></g>`,
		"fallback": "andrsrxn:alarm-on",
	});
}

export default Component;
