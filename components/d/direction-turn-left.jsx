import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qiivxj9lp.css';
import '../../css/v/vhdrq4p5a.css';
import '../../css/w/w8vswdd7s.css';
import '../../css/s/s-eyovbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qiivxj9lp"/><path class="vhdrq4p5a"/><path class="w8vswdd7s"/><path class="s-eyovbtu"/></g>`,
		"fallback": "andrsrxn:direction-turn-left",
	});
}

export default Component;
