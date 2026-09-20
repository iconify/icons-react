import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zt0gceb0n.css';
import '../../css/u/ub4d63l7m.css';
import '../../css/a/ay4kxuviq.css';
import '../../css/i/iaw_d9tfa.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 2)" class="bi12bsetm"><circle class="zt0gceb0n"/><circle class="ub4d63l7m"/><circle class="ay4kxuviq"/><path class="iaw_d9tfa"/></g>`,
		"fallback": "system-uicons:face-delighted",
	});
}

export default Component;
