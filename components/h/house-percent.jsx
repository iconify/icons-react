import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn1xh-bxh.css';
import '../../css/z/zgrju0gim.css';
import '../../css/a/aocwzbcbu.css';
import '../../css/o/oaafszbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xn1xh-bxh"/><path class="zgrju0gim"/><circle class="aocwzbcbu"/><circle class="oaafszbzq"/></g>`,
		"fallback": "andrsrxn:house-percent",
	});
}

export default Component;
