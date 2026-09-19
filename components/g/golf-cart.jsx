import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z3-7nebkq.css';
import '../../css/u/uw4_77bkt.css';
import '../../css/a/a5z88ybwf.css';
import '../../css/c/chbmmywsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z3-7nebkq"/><circle class="uw4_77bkt"/><circle class="a5z88ybwf"/><path class="chbmmywsr"/></g>`,
		"fallback": "hugeicons:golf-cart",
	});
}

export default Component;
