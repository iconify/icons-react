import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbxdvzjvn.css';
import '../../css/y/ypdia9bkn.css';
import '../../css/g/gxxk46bhj.css';
import '../../css/a/aeuiajbdn.css';
import '../../css/a/aycex6hon.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bbxdvzjvn"/><path clip-rule="evenodd" class="ypdia9bkn"/><path class="gxxk46bhj"/><path class="aeuiajbdn"/><path class="aycex6hon"/></g>`,
		"fallback": "pepicons:cloud-down-print",
	});
}

export default Component;
