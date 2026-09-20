import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/ckqj84bxn.css';
import '../../css/n/nh9wu4w5t.css';
import '../../css/l/l7sq5fbem.css';
import '../../css/g/gzkgpl-oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ckqj84bxn"/><path class="nh9wu4w5t"/><path class="l7sq5fbem"/><path class="gzkgpl-oo"/></g>`,
		"fallback": "streamline-cyber:delivery-package-2",
	});
}

export default Component;
