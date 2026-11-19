import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clrisub0n.css';
import '../../css/m/m2oclb9jo.css';
import '../../css/p/prnt9vbjy.css';
import '../../css/y/ya85ncdyf.css';
import '../../css/z/zwzzh11zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="clrisub0n"/><circle class="m2oclb9jo"/><path class="prnt9vbjy"/><circle class="ya85ncdyf"/><circle class="zwzzh11zt"/></g>`,
		"fallback": "andrsrxn:git-commits",
	});
}

export default Component;
